import { ActionType } from '../../action-types'
import { ActionDetail, ProductDetail } from './ProductDetailActions'

export type detailState = {
  data: ProductDetail,
  errorMessage: string,
  color: string,
  storage: string
}

const initialState = {
  data: {} as ProductDetail,
  errorMessage: '',
  color: '',
  storage: '',
}

export const ProductDetailReducer = (
// eslint-disable-next-line default-param-last
  state: detailState = initialState,
  action:ActionDetail,
): detailState => {
  switch (action.type) {
    case ActionType.GET_DETAIL:
      return state
    case ActionType.GET_DETAIL_SUCCESS:
      return { ...state, data: action.payload }
    case ActionType.GET_DETAIL_ERROR:
      return { ...state, errorMessage: action.payload }
    case ActionType.SET_COLOR:
      return { ...state, color: action.payload }
    case ActionType.SET_STORAGE: {
      return { ...state, storage: action.payload }
    }
    default:
      return state
  }
}
