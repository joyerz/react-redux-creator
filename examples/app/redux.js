import * as d from '../../src/index'
import fetch from '../utils/fetch'
d.default.initFetch(fetch)

export const companyAddRedux = d.default.buildReduxConnectSaga('companyAdd')({
  onResult: () => 'hello'
})
export const companyListRedux = d.default.buildListReduxConnectSaga('companyList' )({
  url: '/api/user/login/password?name=1',
  method: 'POST',
  data: {
    hello: 'yes'
  },
  headers: {
    call: 'ddd'
  },
  onResult: (data, payload) => {
    // console.log(data)
    // return data
  },
  onAfter: function* (data, payload, sagaActions, actions, allActions) {
    console.log(allActions)
    yield sagaActions.put(allActions['companyAdd'].start())
    // console.log(data.substring(0, 10), payload)
  },
  onError: (err) => console.log('onError', err)
})
