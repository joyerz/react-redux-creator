import { buildRedux, buildListRedux } from './libs/helper'
import config from './libs/settings'
import connectSagas from './libs/connectSagas'
import { myConnect } from './libs/store'
import Provider, { createStore } from './libs/provider'

export default {
  buildRedux: connectSagas(buildRedux),
  buildListRedux: connectSagas(buildListRedux),
  connect: myConnect,
  Provider,
  config,
  createStore,
}

