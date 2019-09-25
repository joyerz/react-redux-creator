import * as React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { sagas, reducers } from './connectSagas'
import configureStore, { history } from './store'

export default ({ routes, initState = {} }) => {
  const store = configureStore(initState, reducers, sagas)
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {typeof routes === 'function' ? routes() : routes}
      </ConnectedRouter>
    </Provider>
  )
}
