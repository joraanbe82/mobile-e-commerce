import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Report } from 'notiflix/build/notiflix-report-aio'

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
import { OptionValues } from '../../views/ProductDetail/ProductDetailActions'

function DetailBox({ id }:{ id: string }) {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const mobile = useAppSelector((state) => state.details.data)
  const color = useAppSelector((state) => state.details.color)
  const storage = useAppSelector((state) => state.details.storage)

  const URL = process.env.REACT_APP_URL

  const handleChangeColor = (event: SelectChangeEvent) => {
    dispatch({ type: ActionType.SET_COLOR, payload: event.target.value.toString() })
  }

  const handleChangeCapacity = (event: SelectChangeEvent) => {
    dispatch({ type: ActionType.SET_STORAGE, payload: event.target.value.toString() })
  }

  const isFormValid = () => color.length > 0 && storage.length > 0

  return (

    <Box sx={{ flexGrow: 1 }} className='box'>
      <Grid
        container
        spacing={{ xs: 2, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: 'center' }}
      >
        <Grid item xs={4}>
          <Card className='card'>
            <CardMedia
              component='img'
              image={mobile.imgUrl}
              alt={mobile.model}
            />
          </Card>

        </Grid>
        <Grid item xs={4}>
          <section>
            <h4>Características</h4>
            <div>
              <p>
                <strong>Marca: </strong>
                {' '}
                {mobile.brand}
              </p>
              <p>
                <strong>Modelo: </strong>
                {' '}
                {mobile.model}
              </p>
              <p>
                <strong>Precio: </strong>
                {' '}
                {mobile.price}
                {' €'}
              </p>
              <p>
                <strong>CPU: </strong>
                {' '}
                {mobile.cpu}
              </p>
              <p>
                <strong>RAM: </strong>
                {' '}
                {mobile.ram}
              </p>
              <p>
                <strong>Sistema Operativo: </strong>
                {' '}
                {mobile.os}
              </p>
              <p>
                <strong>Resolución de pantalla: </strong>
                <span>
                  {mobile.displayResolution}
                  {' - '}
                </span>
                <span>
                  {mobile.displaySize}
                  {' - '}
                </span>
                <span>{mobile.displayType}</span>

              </p>
              <p>
                <strong>Batería: </strong>
                {' '}
                {mobile.battery}
              </p>
              <p>
                <strong>Cámara principal: </strong>
                {' '}
                {typeof mobile.primaryCamera !== 'string'
                && mobile.primaryCamera.length > 0
                && mobile.primaryCamera.map((detail) => (
                  <span key={detail}>
                    {detail}
                    {'  '}
                  </span>
                ))}
                {typeof mobile.primaryCamera === 'string'
                && (
                <span>
                  { mobile.primaryCamera}

                </span>
                )}
              </p>
              <p>
                <strong>Cámara secundaria: </strong>
                {' '}
                <span>
                  { mobile.secondaryCmera}
                </span>
              </p>
              <p>
                <strong>Dimesiones: </strong>
                {' '}
                {mobile.dimentions}
              </p>
              <p>
                <strong> Peso: </strong>
                {' '}
                {mobile.weight}
                {' gr'}
              </p>

            </div>

          </section>

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

        </Grid>

      </Grid>
    </Box>

  )
}

export default DetailBox
