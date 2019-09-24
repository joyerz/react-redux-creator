import * as d from '../../src/index'

export const companyAddRedux = d.default.buildRedux('companyAdd')({
  onResult: () => 'hello'
})

export const companyListRedux = d.default.buildRedux('companyList' )({
  url: '/api/user/login/password?name=1',
  method: 'POST',
  data: {
    hello: 'yes'
  },
  headers: {
    call: 'ddd'
  },
  onResult: function*(data, payload, config) {
    console.log(config)
    // return data
  },
  onAfter: function* (data, payload, config) {
    const { getAction, effects } = config
    yield effects.put(getAction('companyAdd').start())
  },
  onError: (err) => console.log('onError', err)
})
