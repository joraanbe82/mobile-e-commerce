import { ActionType } from '../../action-types'
import { Action, Product } from './ProductListActions'

export type productListState = {
  data: Product[],
  filterData: Product[],
  errorMessage: string,
  timer: number,
  search: string,
  filter: string,
}

const initialState = {
  data: [] as Product[],
  filterData: [] as Product[],
  errorMessage: '',
  timer: 0,
  search: '',
  filter: '',
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
      return { ...state, data: action.payload, errorMessage: '' }
    case ActionType.GET_PRODUCTS_ERROR:
      return { ...state, errorMessage: action.payload }
    case ActionType.SET_COUNTER:
      return { ...state, timer: action.payload }
    case ActionType.FILTER:
      return { ...state, filter: action.payload }
    case ActionType.SEARCH_PRODUCT: {
      if (action.payload.length === 0) {
        return { ...state, filterData: [] }
      }
      const searched = state.data.filter((mobile) => mobile.model.includes(action.payload)
        || mobile.brand.includes(action.payload))
      return { ...state, filterData: searched }
    }
    default:
      return state
  }
}
