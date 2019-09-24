import * as React from 'react'

import { Route, Switch } from 'react-router' // react-router v4/v5
import Home from '../pages/home'

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
export default routes
