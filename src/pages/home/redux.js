import { buildRedux } from 'react-redux-creator'

export const storyListRedux = buildRedux('storyList')({
  url: '/api/satinGodApi',
  method: 'GET',
  data: payload => payload,
  onResult: function* (data) {
    console.log(data)
  },
  onAfter: function* (err, payload, config) {
    const { effects, getAction } = config
    yield effects.put(getAction('storyAdd').start())
  },
  onError: (err) => console.log(err)
})

export const storyAddRedux = buildRedux('storyAdd')({
  onResult: function* () {
    console.log('storyAdd...')
  },
})
