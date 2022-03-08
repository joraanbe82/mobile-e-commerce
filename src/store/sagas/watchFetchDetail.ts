import { call, put, takeEvery } from 'redux-saga/effects'
import { ActionType } from '../../action-types'
import { ProductDetail } from '../../views/ProductDetail/ProductDetailActions'

import { fetchDetails } from '../utils/apiFetchDetail'

type DetailParams = {
  payload: string
  type: string
}

function* getDetails(action: DetailParams) {
  try {
    const details: ProductDetail = yield call(fetchDetails, action.payload)
    yield put({ type: ActionType.GET_DETAIL_SUCCESS, payload: details })
  } catch (e) {
    yield put({
      type: ActionType.GET_DETAIL_ERROR,
      payload: 'Error, no se ha podido cargar la página',
    })
  }
}

function* watchFetchDetail() {
  yield takeEvery(ActionType.GET_DETAIL, getDetails)
}

export default watchFetchDetail
