import React from 'react'
import TextField from '@mui/material/TextField'

import './SearchBar.css'

function SearchBar({ setSearch }: {
  setSearch: (value: string)=> void}) {
  return (
    <section className='searchBar'>
      <TextField
        variant='outlined'
        label='Search'
        onChange={(e) => setSearch(e.target.value)}
      />
    </section>
  )
}

export default SearchBar
