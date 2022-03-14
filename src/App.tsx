import React, { useEffect, useState } from 'react'
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom'

import Container from '@mui/material/Container'

import BreadcrumbsComponent from './components/Breadcrumb/Breadcrumb'
import Error404Page from './components/error404/Error404Page'
import Navbar from './components/Navbar/Navbar'
import ProductDetailPageNew from './views/ProductDetail/ProductDetailPage'
import ProductListPage from './views/ProductList/ProductListPage'

function App() {
  const location = useLocation()
  const [currLocation, setCurrLocation] = useState('')

  useEffect(() => {
    const currentLocation = () => {
      if (location.pathname.includes('/home')) {
        setCurrLocation('home')
      }
      if (location.pathname.includes('/detail')) {
        setCurrLocation('detail')
      }
    }
    currentLocation()
  }, [location])

  return (
    <Container maxWidth={false}>
      <Navbar />
      <BreadcrumbsComponent page={currLocation} />
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<ProductListPage />} />
        <Route path='/detail/:id' element={<ProductDetailPageNew />} />
        <Route path='*' element={<Error404Page />} />
      </Routes>
    </Container>
  )
}

export default App
