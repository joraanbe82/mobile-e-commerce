import React, { useEffect } from 'react'

import { ActionType } from '../../action-types'
import { useAppDispatch, useAppSelector } from '../../store/hooks'

import SearchBar from '../../components/SearchBar/SearchBar'
import ListItem from '../../components/ListItems/ListItem'

function ProductListPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.data)
  const timer = useAppSelector((state) => state.product.timer)
  const filter = useAppSelector((state) => state.product.filter)
  const filterData = useAppSelector((state) => state.product.filterData)
  const error = useAppSelector((state) => state.product.errorMessage)

  // call api first time
  useEffect(() => {
    if (window.sessionStorage.getItem('products') === null) {
      dispatch({ type: ActionType.GET_PRODUCTS })
    }
  }, [dispatch])

  // save data in client
  useEffect(() => {
    if (products.length > 0) {
      window.sessionStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  // use data saved in client if exist
  useEffect(() => {
    if (window.sessionStorage.getItem('products') !== null) {
      const productData = window.sessionStorage.getItem('products')
      if (productData) {
        dispatch({
          type: ActionType.GET_PRODUCTS_SUCCESS,
          payload: JSON.parse(productData),
        })
      }
    }
  }, [dispatch])

  // filter items
  useEffect(() => {
    if (filter.length > 0) {
      const filterProduct = (value: string) => {
        dispatch({ type: ActionType.SEARCH_PRODUCT, payload: value })
      }
      filterProduct(filter)
    }
  }, [filter, dispatch])

  // timer to remove the selections after a 1 hour
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (timer > 0) {
      window.sessionStorage.setItem('timer', 'true')
      const counter = setTimeout(() => {
        window.sessionStorage.removeItem('products')
        window.sessionStorage.removeItem('timer')
        window.sessionStorage.removeItem('count')
        dispatch({ type: ActionType.SET_COUNTER, payload: 0 })
      }, timer)
      return () => clearTimeout(counter)
    }
    // if (timer === 0) {
    //   window.sessionStorage.removeItem('products')
    //   window.sessionStorage.removeItem('timer')
    //   window.sessionStorage.removeItem('count')
    // }
  }, [timer, dispatch])

  return (
    <>
      <SearchBar />
      {filterData.length === 0
        ? <ListItem data={products} />
        : <ListItem data={filterData} />}
      {error && <div className='errorMessage'><h3>{error}</h3></div>}
    </>
  )
}

export default ProductListPage
