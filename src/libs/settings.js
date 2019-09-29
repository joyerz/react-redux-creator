// 初始化配置
const defaultOptions = {
  logger: true, // redux-logger
  fetchMethod: null, // fetch请求
  history: 'browser', // browser, hash, memory, none
  autoActions: true,
  middleware: [], // middleware
}

export const getOptions = () => {
  let options = {
    ...defaultOptions
  }

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

export const config = getOptions()
export const options = config()
