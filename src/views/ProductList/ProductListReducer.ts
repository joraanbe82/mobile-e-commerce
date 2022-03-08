import { ActionType } from '../../action-types'
import { Action, Product } from './ProductListActions'

export type productListState = {
  data: Product[]
  errorMessage: string,
  timer: number
}

const initialState = {
  data: [] as Product[],
  errorMessage: '',
  timer: 0,
}

export const ProductListReducer = (
  // eslint-disable-next-line default-param-last
  state: productListState = initialState,
  action: Action,
): productListState => {
  switch (action.type) {
    case ActionType.GET_PRODUCTS:
      return state
    case ActionType.GET_PRODUCTS_SUCCESS:
      return { ...state, data: action.payload }
    case ActionType.GET_PRODUCTS_ERROR:
      return { ...state, errorMessage: action.payload }
    case ActionType.SET_COUNTER:
      return { ...state, timer: action.payload }
    default:
      return state
  }
}
