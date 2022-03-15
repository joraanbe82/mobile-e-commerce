/* eslint-disable no-console */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

import { ActionType } from '../../action-types'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import SearchBar from '../../components/SearchBar/SearchBar'

function ProductListPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.data)
  const timer = useAppSelector((state) => state.product.timer)
  const filter = useAppSelector((state) => state.product.filter)
  const filterData = useAppSelector((state) => state.product.filterData)

  // eslint-disable-next-line no-console
  console.log(filter)
  console.log(filterData)

  // call api first time
  useEffect(() => {
    if (window.sessionStorage.getItem('products') === null
      && window.sessionStorage.getItem('timer') === null) {
      dispatch({ type: ActionType.GET_PRODUCTS })
    }
  }, [dispatch, timer])

  // save data in client
  useEffect(() => {
    if (products.length > 0) {
      window.sessionStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  // filter items
  useEffect(() => {
    const filterProduct = (value: string) => {
      dispatch({ type: ActionType.SEARCH_PRODUCT, payload: value })
    }
    filterProduct(filter)
  }, [filter, dispatch])

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
    if (timer === 0) {
      window.sessionStorage.removeItem('products')
      window.sessionStorage.removeItem('timer')
      window.sessionStorage.removeItem('count')
    }
  }, [timer, dispatch])

  return (
    <>
      <SearchBar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ justifyContent: 'center' }}
        >

          {filterData.length === 0 && products.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card sx={{ boxShadow: '2px 4px 4px 4px grey', padding: '3px' }}>
                <CardHeader
                  title={product.model}
                  subheader={`${product.brand}  ${product.price} €`}
                />
                <Link to={`/detail/${product.id}`}>
                  <CardMedia
                    component='img'
                    image={product.imgUrl}
                    alt={product.model}
                  />
                </Link>
              </Card>

            </Grid>
          ))}
          {filterData.length > 0 && filterData.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card sx={{ boxShadow: '2px 4px 4px 4px grey', padding: '3px' }}>
                <CardHeader
                  title={product.model}
                  subheader={`${product.brand}  ${product.price} €`}
                />
                <Link to={`/detail/${product.id}`}>
                  <CardMedia
                    component='img'
                    image={product.imgUrl}
                    alt={product.model}
                  />
                </Link>
              </Card>

            </Grid>
          ))}
          {/* {search.length > 0 && filteredData.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card sx={{ boxShadow: '2px 4px 4px 4px grey', padding: '3px' }}>
                <CardHeader
                  title={product.model}
                  subheader={`${product.brand}  ${product.price} €`}
                />
                <Link to={`/detail/${product.id}`}>
                  <CardMedia
                    component='img'
                    image={product.imgUrl}
                    alt={product.model}
                  />
                </Link>
              </Card>
            </Grid>
          ))} */}

          {/* {search.length === 0 && data.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card sx={{ boxShadow: '2px 4px 4px 4px grey', padding: '3px' }}>
                <CardHeader
                  title={product.model}
                  subheader={`${product.brand}  ${product.price} €`}
                />
                <Link to={`/detail/${product.id}`}>
                  <CardMedia
                    component='img'
                    image={product.imgUrl}
                    alt={product.model}
                  />
                </Link>
              </Card>

            </Grid>
          ))} */}

        </Grid>
      </Box>
    </>
  )
}

export default ProductListPage
