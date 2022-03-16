import { Report } from 'notiflix'
import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionType } from '../../action-types'

import { ProductDetail, Cart } from '../../views/ProductDetail/ProductDetailActions'

import { fetchAddToCart } from '../utils/apiCart'

type DetailParams = {
  payload: Cart,
  type: string
}

function* addToCart(action: DetailParams) {
  try {
    const details: ProductDetail = yield call(fetchAddToCart, action.payload)
    const totalCart = window.sessionStorage.getItem('count')
    const newTotal = Number(totalCart) + 1
    window.sessionStorage.setItem('count', newTotal.toString())
    Report.success(
      'Artículo agregado',
      'Se ha agregado correctamente el artículo a la cesta',
      'Aceptar',
    )
    yield put({ type: ActionType.ADD_CART_SUCCESS, payload: details })
    yield put({ type: ActionType.SET_COLOR, payload: '' })
    yield put({ type: ActionType.SET_STORAGE, payload: '' })
    action.payload.navigate('/home')
  } catch (e) {
    yield put({
      type: ActionType.ADD_CART_ERROR,
      payload: 'Error, no se ha podido agregar al carro',
    })
  }
}

function* watchFetchCart() {
  yield takeEvery(ActionType.ADD_CART, addToCart)
}

export default watchFetchCart
