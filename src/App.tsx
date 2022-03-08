import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Container from '@mui/material/Container'

import ProductListPage from './views/ProductList/ProductListPage'
import ProductDetailPageNew from './views/ProductDetail/ProductDetailPage'

function App() {
  return (
    <Container maxWidth={false}>
      <Routes>
        <Route path='/' element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<ProductListPage />} />
        <Route path='/detail/:id' element={<ProductDetailPageNew />} />
      </Routes>
    </Container>
  )
}

export default App
