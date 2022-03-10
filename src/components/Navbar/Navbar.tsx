import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Badge from '@mui/material/Badge'

import './Navbar.css'

function Navbar() {
  const [cartItems, setCartItems] = useState(0)

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const items = window.sessionStorage.getItem('count')
    if (items !== null) {
      setCartItems(Number(items))
    }
  })

  return (
    <section className='navbar'>
      <div className='divLogo'>
        <Link to='/home'>
          <img alt='logo' src='/hand.png' width={50} />
          <p>Mobile store</p>
        </Link>
      </div>
      <div>
        <h3>Tienda de móviles</h3>

      </div>

      <div className='divBadge'>
        <Badge badgeContent={cartItems} color='secondary'>
          <ShoppingCart sx={{ fill: 'orangered' }} />
        </Badge>
      </div>

    </section>
  )
}

export default Navbar
