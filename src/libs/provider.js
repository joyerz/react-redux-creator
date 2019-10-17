import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { sagas, reducers } from './connectSagas'
import configureStore, { history } from './store'
import config from './settings'

export const createStore = (initState = {}) => {
  const store = configureStore(initState, reducers, sagas)
  config({ store })
  return store
}

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

