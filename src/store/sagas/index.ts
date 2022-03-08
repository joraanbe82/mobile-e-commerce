import { all, fork } from 'redux-saga/effects'
import watchFetchProducts from './watchFetchProducts'
import watchFetchDetail from './watchFetchDetail'

export default function* rootSaga() {
  yield all([fork(watchFetchProducts), fork(watchFetchDetail)])
}
