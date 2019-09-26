import { applyMiddleware, compose, createStore, combineReducers, bindActionCreators } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import logger from 'redux-logger'
import { reducers, sagas } from './connectSagas'
import { config } from './settings'

const options = config()
console.log('o', options)

const sagaMiddleware = createSagaMiddleware()

const createRootReducer = (reducers) => {
  return combineReducers({
    ...reducers,
  })
}

const combineMiddleware = () => {
  let middleWare = [
    sagaMiddleware,
  ]
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

export default function configureStore(initState) {
  const store = createStore(
    createRootReducer(reducers),
    initState,
    combineMiddleware(),
  )
  sagaMiddleware.run(function* rootSaga(getState) {
    yield all(sagas)
  })

  return store
}

