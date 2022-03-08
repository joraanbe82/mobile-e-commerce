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
  id: string,
  brand: string,
  model: string,
  price: string,
  imgUrl: string,
  networkTechnology: string,
  networkSpeed: string,
  gprs: string,
  edge: string,
  announced: string,
  status: string,
  dimentions: string,
  weight: string,
  sim: string[],
  displayType: string,
  displayResolution: string,
  displaySize: string,
  os: string,
  cpu: string,
  chipset: string,
  gpu: string,
  externalMemory:string,
  internalMemory: string[],
  ram: string,
  primaryCamera: string[],
  secondaryCmera: string,
  speaker: string,
  audioJack: string,
  wlan: string,
  bluetooth: string,
  gps: string,
  nfc: string,
  radio: string,
  usb: string,
  sensors: string[],
  battery: string,
  colors: string[],
  options: Options
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

export type ActionDetail = GetProductDetail |
GetProductDetailSuccess |
GetProductDetailError
