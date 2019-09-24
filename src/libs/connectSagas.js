import { put, call, takeLatest, select, delay } from 'redux-saga/effects'
import { obj2params, underScoreToCamel } from './common'
import { options } from './settings'

// 常规sagas的操作
const effects = {
  put,
  call
}

// 全局的redux actions
const allActions = {}
export let sagas = []
export let reducers = {}

// 获取全局的action
const getAction = (actionName) => allActions[actionName]
/**
 * 创建reduce时自动关联saga
 */
export default reduxer => (...args) => {
  const redux = reduxer.call(null, ...args)
  const name = underScoreToCamel(args[0])

  allActions[name] = redux.actions
  reducers[name] = redux.reducer

  return conf => {
    const watch = createWatcher(redux, conf)
    sagas.push(watch)
    return redux.actions
  }
}

/**
 * add watcher
 * @param redux
 * @param conf
 * @return {IterableIterator<ForkEffect>}
 */
function* createWatcher(redux, conf) {
  yield takeLatest(redux.types.START, function* ({ payload }) {
    conf = conf || {}
    let { url, data, method, headers = {}, onResult, onAfter, onError, fetch } = conf

    const callbackConfig = {
      ...effects,
      getAction: getAction,
      getState: getState,
    }

    try {
      // url处理
      url = typeof url === 'function' ? yield url(payload, callbackConfig) : url
      method = method ? method.toUpperCase() : 'GET'

      if (typeof data === 'function') {
        data = yield data(payload, callbackConfig)
      }
      if (method === 'GET' && data) {
        url += url.indexOf('?') === -1 ? '?' : '&'
        url += obj2params(data)
      }

      let result
      // fetch方法是否定义
      const fetchMethod = fetch ? fetch : options.fetchMethod
      if (fetchMethod && url) {
        result = yield call(fetchMethod, {
          url,
          method,
          data,
          headers,
        })
      }

      // data handler
      if (onResult) {
        const fallbackResult = yield call(onResult, result, payload, callbackConfig)
        result = fallbackResult || result
      }

      yield put(redux.actions.success(result))

      // after data handled callback
      if (onAfter) {
        yield call(onAfter, result, payload, callbackConfig)
      }
    } catch (err) {
      yield put(redux.actions.reset())

      // error handler
      if (onError) {
        yield call(onError, err, payload, callbackConfig)
      }
    }
  })
}

const getState = function*(child) {
  const get = state => state[child]
  return yield select(get)
}



