import { createBrowserHistory, createHashHistory, createMemoryHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers, bindActionCreators } from 'redux'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connect } from 'react-redux'
import logger from 'redux-logger'
import { options } from './settings'

let historyStore
switch (options.history) {
  case 'browser':
    historyStore = createBrowserHistory()
    break
  case 'hash':
    historyStore = createHashHistory()
    break
  case 'memory':
    historyStore = createMemoryHistory()
    break
  default:
    historyStore = null
}

export const history = historyStore

const sagaMiddleware = createSagaMiddleware()

const createRootReducer =
  (history, reducers) => combineReducers({
    ...(history ? { router: connectRouter(history) } : {}),
    ...reducers,
  })

const combineMiddleware = () => {
  let middleWare = [
    sagaMiddleware,
  ]
  if (history) {
    middleWare.push(routerMiddleware(history)) // for dispatching history actions
  }

  if (Object.prototype.toString.call(options.middleware) === '[object Array]') {
    middleWare = [...middleWare, ...options.middleware]
  }
  if (options.logger) {
    middleWare.push(logger)
  }
  return compose(
    applyMiddleware(...middleWare),
  )
}

export default function configureStore(initState, reducers, sagas) {
  const store = createStore(
    createRootReducer(history, reducers),
    initState,
    combineMiddleware(),
  )
  sagaMiddleware.run(function* rootSaga(getState) {
    yield all(sagas)
  })

  return store
}

export const myConnect = (mapState, mapPropsObject) => connect(
  mapState,
  dispatch => bindActionCreators(
    {
      ...mapPropsObject,
    },
    dispatch,
  ),
)
