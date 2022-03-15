import React from 'react'
import { useNavigate } from 'react-router-dom'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import FormControl from '@mui/material/FormControl'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import ShoppingCart from '@mui/icons-material/AddShoppingCart'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionType } from '../../action-types'
import { OptionValues, ProductDetail } from '../../views/ProductDetail/ProductDetailActions'

function DetailActions({ mobile, id }:{mobile: ProductDetail; id:string}) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const color = useAppSelector((state) => state.details.color)
  const storage = useAppSelector((state) => state.details.storage)

  const handleChangeColor = (event: SelectChangeEvent) => {
    dispatch({ type: ActionType.SET_COLOR, payload: event.target.value.toString() })
  }

  const handleChangeCapacity = (event: SelectChangeEvent) => {
    dispatch({ type: ActionType.SET_STORAGE, payload: event.target.value.toString() })
  }

  const isFormValid = () => color.length > 0 && storage.length > 0
  return (

    <section className='actions'>
      <div className='selects'>
        <FormControl fullWidth>
          <InputLabel id='color-label'>Color</InputLabel>
          <Select
            labelId='color-label'
            id='color-select'
            value={color}
            label='Color'
            onChange={handleChangeColor}
          >
            {mobile.options.colors.map((MobileColor:OptionValues) => (
              <MenuItem
                key={MobileColor.code}
                value={MobileColor.code}
              >
                {MobileColor.name}
              </MenuItem>
            ))}

          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id='capacity-label'>
            Almacenamiento
          </InputLabel>
          <Select
            labelId='capacity-label'
            id='capacity-select'
            value={storage}
            label='Almacenamiento'
            onChange={handleChangeCapacity}
          >
            {mobile.options.storages.map((capacity:OptionValues) => (
              <MenuItem
                key={capacity.code}
                value={capacity.code}
              >
                {capacity.name}
              </MenuItem>
            ))}

          </Select>
        </FormControl>

      </div>

      <Button
        startIcon={<ShoppingCart />}
        variant='contained'
        onClick={() => dispatch({
          type: ActionType.ADD_CART,
          payload: {
            id, colorCode: color, storageCode: storage, navigate,
          },
        })}
        disabled={!isFormValid()}
      >
        Añadir a la cesta

      </Button>
      {' '}

    </section>
  )
}

export default DetailActions
