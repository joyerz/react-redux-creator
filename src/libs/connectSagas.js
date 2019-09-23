import { put, call, takeLatest, select, delay } from 'redux-saga/effects'
import { obj2params, underScoreToCamel } from './common'
// import { combineReducers } from 'redux'
export let fetchNetwork = null
export const initFetch = (f) => fetchNetwork = f

// 常规sagas的操作
const sagaActions = {
  put,
  call,
  select,
  delay,
}

// 全局的redux actions
let allActions = {}
export let sagas = []
export let reducers = {}

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
    return redux
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
    try {
      // url处理
      url = typeof url === 'function' ? url(payload) : url
      method = method ? method.toUpperCase() : 'GET'

      if (method === 'GET' && data) {
        url += url.indexOf('?') === -1 ? '?' : '&'
        url += obj2params(data)
      }

      let result
      // fetch方法是否定义
      fetchNetwork = fetch ? fetch : fetchNetwork
      if (!fetchNetwork || !url) {
        console.log('fetch method does not assign!')
      } else {
        // fetch
        result = yield call(fetchNetwork, {
          url,
          method,
          data,
          headers,
        })
      }

      // data handler
      if (onResult) {
        const fallbackResult = yield call(onResult, result, payload, sagaActions, redux.actions, allActions)
        result = fallbackResult || result
      }

      yield put(redux.actions.success(result))

      // after data handled callback
      if (onAfter) {
        yield call(onAfter, result, payload, sagaActions, redux.actions, allActions)
      }
    } catch (err) {
      yield put(redux.actions.reset())

      // error handler
      if (onError) {
        yield call(onError, err, payload, sagaActions, redux.actions, allActions)
      }
    }
  })
}
