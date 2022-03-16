import React from 'react'
import TextField from '@mui/material/TextField'

import { ActionType } from '../../action-types'
import { useAppDispatch } from '../../store/hooks'

import './SearchBar.css'

function SearchBar() {
  const dispatch = useAppDispatch()

  return (
    <section className='searchBar'>
      <TextField
        variant='outlined'
        label='Buscar'
        onChange={(e) => dispatch({
          type: ActionType.FILTER,
          payload: e.target.value.toLowerCase(),
        })}
        inputProps={{
          'data-testid': 'input-search',
        }}
      />
    </section>
  )
}

export default SearchBar
