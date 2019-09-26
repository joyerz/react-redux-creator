import { buildRedux, buildListRedux } from './libs/helper'
import { config } from './libs/settings'
import connectSagas from './libs/connectSagas'
import configureStore from './libs/store'

export default {
  buildRedux: connectSagas(buildRedux),
  config,
  createStore: configureStore,
}
