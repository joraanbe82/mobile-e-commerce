import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

import './Navbar.css'

function Navbar() {
  const [cartItems, setCartItems] = useState(0)

  useEffect(() => {
    const items = window.localStorage.getItem('count')
    setCartItems(Number(items))
  })

  return (
    <section className='navbar'>
      <div className='divLogo'>
        <Link to='/home'>
          <img alt='logo' src='/shop-blue.png' width={50} />
          <p>Tech store</p>
        </Link>
      </div>
      <div>
        <h3>Bazar shurmano, todo de 2º mano</h3>

      </div>

      <div>
        <Badge badgeContent={cartItems} color='primary'>
          <ShoppingCart />
        </Badge>
      </div>

    </section>
  )
}

export default Navbar
