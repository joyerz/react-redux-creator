interface Types {
  START: string,
  SUCCESS: string,
  ERROR: string,
  RESET: string,
}

interface ActionListRedux {
  start: (params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

interface ActionRedux {
  start: (page: string | number, limit: string | number, params?: object) => any,
  success: (data?: object) => any,
  error: (errorMessage: string) => any,
  reset: () => void
}

declare type returnReudxT = {
  actions: ActionListRedux,
  types: Types,
  reducer: any
}

declare type buildListReduxT = (actionName: string, defaultData?: object) => returnReudxT
declare type buildReduxT = (actionName: string, defaultData?: object) => returnReudxT

interface sagaActionsT {
  put: Function,
  call: Function,
  select: Function,
  delay: Function
}

declare type urlFunctionT = (payload: any, sagaActions: sagaActionsT) => string

declare type afterFunctionT = (data: any, payload: any, sagaActions: sagaActionsT, actions: ActionListRedux, allReduxActions: object) => any
declare type catchFunctionT = (e: any, payload: any, sagaActions: sagaActionsT, actions: ActionListRedux, allReduxActions: object) => any

declare type handleSagaFunctionT = (payload: any, sagaActions: sagaActionsT, actions: ActionListRedux, allReduxActions: object) => returnReudxT

declare type handleSagaConfigT = {
  url: string | urlFunctionT,
  method?: string,
  data?: object | urlFunctionT,
  after?: afterFunctionT,
  resultHandler?: afterFunctionT,
  catch?: catchFunctionT,
}

declare type buildReduxConnectSagaT = (actionName: string | Number, defaultData?: object) =>
  (config: handleSagaConfigT | handleSagaFunctionT) => returnReudxT

declare type initFetchT = (doFetch: Function) => void

export const buildRedux: buildReduxT
export const buildListRedux: buildListReduxT
export const buildReduxConnectSaga: buildReduxConnectSagaT
export const buildListReduxConnectSaga: buildReduxConnectSagaT
export const initFetch: initFetchT
export const allSagas: Array<any>
