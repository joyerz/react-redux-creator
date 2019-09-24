
import '@babel/polyfill'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider, config } from 'react-redux-creator'
import fetch from './utils/fetch'
import routes from './routes'

config({
  fetchMethod: fetch,
  logger: true,
})


function appRender() {
  const containerElement = document.getElementById('app')
  ReactDOM.render(
    <Provider routes={routes} />,
    containerElement,
  )
}

appRender()

