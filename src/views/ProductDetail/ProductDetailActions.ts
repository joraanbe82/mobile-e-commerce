import { To } from 'react-router-dom'
import { ActionType } from '../../action-types'

export interface OptionValues {
  code: number
  name: string
}

interface Options {
  colors: OptionValues[]
  storages: OptionValues[]
}

export type ProductDetail = {
  announced: string,
  audioJack: string,
  battery: string,
  bluetooth: string,
  brand: string,
  chipset: string,
  colors: string[],
  cpu: string,
  dimentions: string,
  displayResolution: string,
  displaySize: string,
  displayType: string,
  edge: string,
  externalMemory:string,
  gprs: string,
  gps: string,
  gpu: string,
  id: string,
  imgUrl: string,
  internalMemory: string[],
  model: string,
  networkSpeed: string,
  networkTechnology: string,
  nfc: string,
  options: Options
  os: string,
  price: string,
  primaryCamera: string[],
  radio: string,
  ram: string,
  secondaryCmera: string,
  sensors: string[],
  sim: string[],
  speaker: string,
  status: string,
  usb: string,
  weight: string,
  wlan: string,
}

interface GetProductDetail{
  type: ActionType.GET_DETAIL,
  payload: string
}

interface GetProductDetailSuccess {
  type: ActionType.GET_DETAIL_SUCCESS,
  payload: ProductDetail
}

interface GetProductDetailError {
  type: ActionType.GET_DETAIL_ERROR,
  payload: string
}

interface SetColor {
  type: ActionType.SET_COLOR
  payload: string
}

interface SetStorage {
  type: ActionType.SET_STORAGE,
  payload: string
}
interface NavigateFunction {
  (
    to: To,
    options?: { replace?: boolean; state?: never }
  ): void;
  (delta: number): void;
}
export type Cart = {
  id: string,
  colorCode: string,
  storageCode: string,
  navigate: NavigateFunction
}

interface AddToCart {
  type: ActionType.ADD_CART,
  payload: Cart
}
interface AddToCartSuccess {
  type: ActionType.ADD_CART_SUCCESS,
  payload: number
}

interface AddToCartError {
  type: ActionType.ADD_CART_ERROR,
  payload: string
}

export type ActionDetail =
  GetProductDetailSuccess |
  GetProductDetail |
  GetProductDetailError |
  SetColor |
  SetStorage |
  AddToCart |
  AddToCartSuccess |
  AddToCartError
