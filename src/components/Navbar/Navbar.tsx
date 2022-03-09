import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from '@mui/icons-material/ShoppingCart'

import './Navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
      <Link to='/home'>
        <h3>Bazar surmano, todo de 2º mano</h3>
        <h6>Tech store</h6>
      </Link>
      <div>
        <ShoppingCart />
      </div>

    </section>
  )
}

export default Navbar
