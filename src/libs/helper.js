import { createAction, handleActions } from 'redux-actions'
import Immutable from 'seamless-immutable'

/**
 * @desc normal
 * @param actionName {string}, e.g. load_item
 * @param  defaultData {object}
 */
export const buildRedux = (actionName, defaultData = {}) => {
  const initialState = () =>
    Immutable({
      loading: false,
      error: false,
      success: false,
      params: null,
      data: {},
      ...defaultData,
    })

  const START = `${actionName}_START`
  const SUCCESS = `${actionName}_SUCCESS`
  const ERROR = `${actionName}_ERROR`
  const RESET = `${actionName}_REST`

  const start = createAction(START, (params = null) => ({params}))
  const reset = createAction(RESET)
  const success = createAction(SUCCESS, data => ({ data }))
  const error = createAction(ERROR, errorMessage => ({ errorMessage }))

  const reducer = handleActions(
    {
      [START]: (state, action) =>
        state.merge({
          loading: true,
          error: false,
          success: false,
          params: action.payload && action.payload.params,
        }),
      [SUCCESS]: (state, action) =>
        state.merge({
          loading: false,
          error: false,
          success: true,
          data: action.payload && action.payload.data,
        }),
      [ERROR]: (state, action) =>
        Immutable({
          loading: false,
          error: true,
          success: false,
        }),
      [RESET]: (state, action) => initialState(),
    },
    initialState(),
  )

  return {
    actions: {
      start,
      success,
      error,
      reset,
    },
    types: {
      START,
      SUCCESS,
      ERROR,
      RESET,
    },
    reducer,
  }
}

/**
 *
 * @param actionName {string}, e.g. list_vehicle
 * @param defaultData {object}
 * @return {{types: {SUCCESS: string, START: string, ERROR: string, RESET: string}, reducer: Function, actions:
 *   {success: actionCreator, start: actionCreator, reset: actionCreator, error: actionCreator}}}
 */
export const buildListRedux = (actionName, defaultData = {}) => {
  const initialState = () =>
    Immutable({
      loading: false,
      error: false,
      success: false,
      params: {},
      data: {
        page: 1,
        per_page: 10,
        total_count: 0,
        total_page: 0,
        entries: [],
      },
      ...defaultData,
    })

  const START = `${actionName}_LIST_START`
  const SUCCESS = `${actionName}_LIST_SUCCESS`
  const RESET = `RESET_${actionName}_LIST`
  const ERROR = `${actionName}_LIST_ERROR`

  const start = createAction(START, (page, limit, params) => ({
    page,
    limit,
    params,
  }))
  const success = createAction(SUCCESS, data => ({ data }))
  const reset = createAction(RESET)
  const error = createAction(ERROR)

  const reducer = handleActions(
    {
      [START]: (state, action) =>
        state.merge({
          loading: true,
          success: false,
          params: action.payload && action.payload.params,
        }),
      [SUCCESS]: (state, action) => {
        return state.merge({
          loading: false,
          success: true,
          data: action.payload && action.payload.data,
        })
      },
      [ERROR]: state => state.merge({ loading: false, error: true, success: false }),
      [RESET]: state => initialState(),
    },
    initialState(),
  )

  return {
    reducer,
    types: {
      START,
      SUCCESS,
      RESET,
      ERROR,
    },
    actions: {
      start,
      success,
      error,
      reset,
    },
  }
}
