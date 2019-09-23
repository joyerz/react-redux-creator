import { buildRedux, buildListRedux } from './libs/helper'
// import withSaga, { init, allSagas } from './withSaga'
import connectSagas, { initFetch } from './libs/connectSagas'
import { history, myConnect } from './libs/store'
import Provider from './libs/provider'

export default {
  buildRedux,
  buildListRedux,
  initFetch: initFetch, // 初始化fetch方法
  buildReduxConnectSaga: connectSagas(buildRedux),
  buildListReduxConnectSaga: connectSagas(buildListRedux),
  history,
  connect: myConnect,
  Provider,
}

