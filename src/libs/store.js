import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore, combineReducers, bindActionCreators } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
import { all } from 'redux-saga/effects'
import { connectRouter } from 'connected-react-router'
import { connect } from 'react-redux'

import logger from 'redux-logger'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const createRootReducer =
  (history, reducers) => combineReducers({
    router: connectRouter(history),
    ...reducers,
  })

export default function configureStore(initState, reducers, sagas) {
  const store = createStore(
    // createRootReducer(history), // root reducer with router state
    createRootReducer(history, reducers),
    initState,
    compose(
      applyMiddleware(
        sagaMiddleware,
        routerMiddleware(history), // for dispatching history actions
        logger,
      ),
    ),
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
    dispatch
  ),
)
