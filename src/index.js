import { buildRedux, buildListRedux } from './libs/helper'
import config from './libs/settings'
import connectSagas, {sagas, reducers} from './libs/connectSagas'
import { myConnect, history } from './libs/store'
import Provider, { createStore } from './libs/provider'

export default {
  buildRedux: connectSagas(buildRedux),
  // buildListRedux: connectSagas(buildListRedux),
  connect: myConnect,
  Provider,
  config,
  createStore,
  history,
  sagas,
  reducers,
}

