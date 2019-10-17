// 初始化配置

export let defaultOptions = {
  logger: true, // redux-logger
  fetchMethod: null, // fetch请求
  history: 'browser', // browser, hash, memory, none
  autoActions: true,
  middleware: [], // middleware
  store: null,
}

const settings = () => {
  let options = defaultOptions
  return (opts) => {
    if (opts) {
      options = {
        ...options,
        ...opts
      }
    }
    return options
  }
}

const config = settings()
export default config
