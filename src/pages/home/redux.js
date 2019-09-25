import { buildRedux } from 'react-redux-creator'

export const storyListRedux = buildRedux('storyList')({
  url: '/api/satinGodApi',
  method: 'GET',
  data: payload => payload.params,
  onResult: data => data.data,
  onAfter: function* (err, payload, config) {
    const { put, getAction } = config
    yield put(getAction('storyAdd').start())
  },
  onError: (err) => console.log(err)
})

export const storyAddRedux = buildRedux('storyAdd')({
  onResult: () => {
    console.log('storyAdd...')
  },
})
