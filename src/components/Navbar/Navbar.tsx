import React from 'react'
import { Link } from 'react-router-dom'

import './Navbar.css'

function Navbar() {
  return (
    <section className='navbar'>
      <Link to='/home'>
        HOME
      </Link>

    </section>
  )
}

export default Navbar
