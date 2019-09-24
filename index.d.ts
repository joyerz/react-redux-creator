interface Types {
  START: string,
  SUCCESS: string,
  ERROR: string,
  RESET: string,
}

interface Actions {
  start: (params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

interface ListActions {
  start: (page: string | number, limit: string | number, params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

interface FnConfig {
  put: Function,
  call: Function,
  getAction: (actionName: string) => Actions,
  getState: (actionName: string) => any
}

type PreFunction = (payload: any, options: FnConfig) => string | object
type DataFunction = (payload: any, options: FnConfig) => object
type HandleFunction = (data: any, payload: any, options: FnConfig) => any
type HandleListFunction = (data: any, payload: any, options: FnConfig) => any
type HandleErrorFunction = (err: any, payload: any, options: FnConfig) => any

type SagaConfig = {
  url?: string | PreFunction,
  method?: string,
  data?: object | DataFunction,
  fetch?: FetchFunction,
  onAfter?: HandleFunction,
  onResult?: HandleFunction,
  onError?: HandleErrorFunction,
}

type ListSagaConfig = {
  url?: string | PreFunction,
  method?: string,
  data?: object | DataFunction,
  fetch?: FetchFunction,
  onAfter?: HandleListFunction,
  onResult?: HandleListFunction,
  onError?: HandleErrorFunction,
}

type BuildRedux = (actionName: string, defaultData?: object) =>
  (config: SagaConfig) => Actions


type BuildListRedux = (actionName: string, defaultData?: object) =>
  (config: ListSagaConfig) => Actions

type ConnectReturn = (Component: any) => any
type Connect = (mapStateToProps, actionsToProps) => ConnectReturn

interface ProviderT {
  routes: any,
}

interface FetchConfig {
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTION',
  headers?: object,
  data?: object,
}
type FetchFunction = (fetch: FetchConfig) => Promise<any>
interface Settings {
  fetchMethod: FetchFunction,
  logger: boolean,
}
type Config = (settings: Settings) => void

// 定义fetch方法
export const config: Config

// 定义buildRedux
export const buildRedux: BuildRedux

// 定义buildRedux
export const buildListRedux: BuildListRedux

// 定义connect
export const connect: Connect

// 定义provider
export const Provider: ProviderT
