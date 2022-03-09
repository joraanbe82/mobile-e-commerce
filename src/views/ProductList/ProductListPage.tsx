import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { Product } from './ProductListActions'

import Navbar from '../../components/Navbar/Navbar'
import SearchBar from '../../components/SearchBar/SearchBar'
import { ActionType } from '../../action-types'

function ProductListPage() {
  const dispatch = useAppDispatch()
  const products = useAppSelector((state) => state.product.data)
  const timer = useAppSelector((state) => state.product.timer)
  const [search, setSearch] = useState<string>('')
  const [filteredData, setFilteredData] = useState<Product[]>([])
  const [data, setData] = useState<Product[]>([])

  useEffect(() => {
    if (window.sessionStorage.getItem('products') === null
      && window.sessionStorage.getItem('timer') === null) {
      dispatch({ type: ActionType.GET_PRODUCTS })
    }
  }, [dispatch, timer])

  useEffect(() => {
    if (products.length > 0) {
      window.sessionStorage.setItem('products', JSON.stringify(products))
    }
  }, [products])

  useEffect(() => {
    const permaData = window.sessionStorage.getItem('products')
    if (permaData) {
      setData(JSON.parse(permaData))
    }
  }, [products])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (timer > 0) {
      window.sessionStorage.setItem('timer', 'true')
      const counter = setTimeout(() => {
        window.sessionStorage.removeItem('products')
        window.sessionStorage.removeItem('timer')
      }, timer)
      return () => clearTimeout(counter)
    }
    if (timer === 0) {
      window.sessionStorage.removeItem('products')
      window.sessionStorage.removeItem('timer')
    }
  }, [timer])

  useEffect(() => {
    const filterProduct = (value: string): Product[] => {
      const searched = data.filter((mobile) => mobile.model.includes(value)
      || mobile.brand.includes(value))
      return searched
    }
    filterProduct(search)
    setFilteredData(filterProduct(search))
  }, [data, search])

  return (
    <>
      <SearchBar setSearch={setSearch} />
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
          sx={{ justifyContent: 'center' }}
        >
          {search.length > 0 && filteredData.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card>
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

          {search.length === 0 && data.map((product) => (
            <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
              <Card>
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

        </Grid>
      </Box>
    </>
  )
}

export default ProductListPage
