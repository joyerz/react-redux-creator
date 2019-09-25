import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { sagas, reducers } from './connectSagas'
import configureStore, { history } from './store'

export const createStore = (initState = {}) => configureStore(initState, reducers, sagas)

export default ({ routes, initState = {} }) => {
  const store = createStore(initState)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {typeof routes === 'function' ? routes() : routes}
      </ConnectedRouter>
    </Provider>
  )
}

