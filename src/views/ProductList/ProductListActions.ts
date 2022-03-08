import { ActionType } from '../../action-types'

export type Product = {
  id: string,
  brand: string,
  model: string,
  price: string,
  imgUrl: string
}

interface GetProducts {
  type: ActionType.GET_PRODUCTS
}

interface GetProductsSuccess {
  type: ActionType.GET_PRODUCTS_SUCCESS,
  payload: Product[]
}

interface GetProductsError {
  type: ActionType.GET_PRODUCTS_ERROR,
  payload: string
}

interface SetCounter {
  type: ActionType.SET_COUNTER,
  payload: number
}

export type Action = GetProducts |
  GetProductsSuccess |
  GetProductsError |
  SetCounter
