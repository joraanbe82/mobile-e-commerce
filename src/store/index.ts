import { ThunkAction, Action } from '@reduxjs/toolkit'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { ProductListReducer } from '../views/ProductList/ProductListReducer'
import { ProductDetailReducer } from '../views/ProductDetail/ProductDetailReducer'

export type GlobalState = ReturnType<typeof rootReducer>

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({ product: ProductListReducer, details: ProductDetailReducer })

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>

export default store
