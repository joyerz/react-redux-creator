import * as React from 'react'
import { sagas, reducers } from './connectSagas'
import configureStore, { history } from './store'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

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
