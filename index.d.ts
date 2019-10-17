import * as React from 'react'

type ProviderTProps = {
  routes: any
}
declare class ProviderT extends React.Component<ProviderTProps, any>{
  new (Props: ProviderTProps): {};
}

interface Actions {
  start: (params?: object) => any,
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
  headers?: object,
  extract?: object,
  fetch?: FetchFunction,
  onAfter?: HandleFunction | any,
  onResult?: HandleFunction,
  onError?: HandleErrorFunction,
}

interface SagaConfiguration {
  url?: string | PreFunction,
  method?: string,
  data?: object | DataFunction,
  headers?: object,
  extract?: object,
  fetch?: FetchFunction,
  onAfter?: (data: any, payload: any, options: FnConfig) => any
  onResult?: (data: any, payload: any, options: FnConfig) => any
  onError?: (err: any, payload: any, options: FnConfig) => any
}

type BuildRedux = (actionName: string, defaultData?: object) =>
  (config: SagaConfiguration) => Actions

type ConnectReturn = (Component: any) => any
type Connect = (mapStateToProps: Function, actionsToProps: object) => ConnectReturn

interface FetchConfig {
  url?: string,
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'OPTION',
  headers?: object,
  data?: object,
}
type FetchFunction = (fetch: FetchConfig) => Promise<any>
interface Settings {
  fetchMethod?: FetchFunction,
  logger?: boolean,
  history?: 'browser' | 'hash' | 'memory',
  middleware?: Array<any>,
  autoActions?: boolean,
}
type Config = (settings: Settings) => void

// 定义fetch方法
export const config: Config

// 定义buildRedux
export const buildRedux: BuildRedux

// 定义connect
export const connect: Connect

// 定义provider
export const Provider: typeof ProviderT

// history
export const history: any

// 导出createStore，比如在taro中无法使用Provider
export const createStore: (initState?: object) => object
