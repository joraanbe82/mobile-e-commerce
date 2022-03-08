import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionType } from '../../action-types'
import { Product } from '../../views/ProductList/ProductListActions'

import { fetchProducts } from '../utils/apiFetch'

function* getProducts() {
  try {
    const products: Product[] = yield call(fetchProducts)
    yield put({ type: ActionType.GET_PRODUCTS_SUCCESS, payload: products })
    yield put({ type: ActionType.SET_COUNTER, payload: 360000 })
  } catch (e) {
    yield put({
      type: ActionType.GET_PRODUCTS_ERROR,
      payload: 'Error, no se ha podido cargar la página',
    })
  }
}

function* watchFetchProducts() {
  yield takeEvery(ActionType.GET_PRODUCTS, getProducts)
}

export default watchFetchProducts
