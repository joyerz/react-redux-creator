import * as React from 'react'

import { Route, Switch } from 'react-router' // react-router v4/v5
import App from '../app'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  )
}
export default routes
