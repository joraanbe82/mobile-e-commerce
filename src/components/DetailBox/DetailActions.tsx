import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { SelectChangeEvent } from '@mui/material/Select'
import Button from '@mui/material/Button'
import ShoppingCart from '@mui/icons-material/AddShoppingCart'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionType } from '../../action-types'
import {
  ProductDetail,
} from '../../views/ProductDetail/ProductDetailActions'

import Selector from './Selector'

function DetailActions({ mobile }:{mobile: ProductDetail}) {
  const { id } = useParams()
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

        <Selector
          value={color}
          label='Color'
          onHandle={handleChangeColor}
          menuItems={mobile.options.colors}
        />

        <Selector
          value={storage}
          label='Almacenamiento'
          onHandle={handleChangeCapacity}
          menuItems={mobile.options.storages}
        />

      </div>
      {id && (
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
      )}
    </section>
  )
}

export default DetailActions
