// @flow
import '@babel/polyfill'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as d from '../src/index'
import fetch from './utils/fetch'
import routes from './routes'
const Provider = d.default.Provider

d.default.settings({
  fetchMethod: fetch,
  logger: false,
})

function appRender() {
  const containerElement = document.getElementById('app')
  ReactDOM.render(
    <Provider routes={routes} />,
    containerElement,
  )
}

appRender()

