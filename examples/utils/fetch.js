import axios from 'axios'

export default async function fetch(config) {
  const { url, method, data = {}, headers = {} } = config
  return await axios({
    url,
    method,
    data,
    headers,
  })
    .then(res => res.data)
    .catch(e => {
      console.error(e)
      throw e
    })
}
