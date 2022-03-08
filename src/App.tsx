import React, { useEffect, useState } from 'react'
import {
  Routes, Route, Navigate, useLocation,
} from 'react-router-dom'

import Container from '@mui/material/Container'

import ProductListPage from './views/ProductList/ProductListPage'
import ProductDetailPageNew from './views/ProductDetail/ProductDetailPage'
import BreadcrumbsComponent from './components/Breadcrumb/Breadcrumb'
import Navbar from './components/Navbar/Navbar'

function App() {
  const location = useLocation()
  const [currLocation, setCurrLocation] = useState('')

  useEffect(() => {
    const currentLocation = () => {
      if (location.pathname.includes('/home')) {
        setCurrLocation('home')
      } else {
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
      </Routes>
    </Container>
  )
}

export default App
