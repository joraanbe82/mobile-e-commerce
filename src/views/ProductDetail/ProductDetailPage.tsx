import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Report } from 'notiflix/build/notiflix-report-aio'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import ShoppingCart from '@mui/icons-material/AddShoppingCart'
import BackIcon from '@mui/icons-material/ReplyOutlined'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import { ActionType } from '../../action-types'
import { OptionValues } from './ProductDetailActions'

import './ProductDetail.css'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const mobile = useAppSelector((state) => state.details.data)
  const [colors, setColors] = useState<string>('')
  const [storage, setStorage] = useState<string>('')

  const URL = process.env.REACT_APP_URL

  useEffect(() => {
    if (id) {
      dispatch({ type: ActionType.GET_DETAIL, payload: id })
    }
  }, [id, dispatch])

  const handleChangeColor = (event: SelectChangeEvent) => {
    setColors(event.target.value.toString())
  }

  const handleChangeCapacity = (event: SelectChangeEvent) => {
    setStorage(event.target.value.toString())
  }

  const addToCar = () => new Promise((resolve, reject) => {
    axios.post(`${URL}/api/cart`, {
      id: mobile.id,
      colorCode: colors,
      storageCode: storage,
    })
      .then((response) => {
        if (response.status === 200) {
          const totalCart = window.sessionStorage.getItem('count')
          const newTotal = Number(totalCart) + 1
          window.sessionStorage.setItem('count', newTotal.toString())
          Report.success(
            'Artículo agregado',
            'Se ha agregado correctamente el artículo a la cesta',
            'Aceptar',
          )
          resolve(navigate('/home'))
        }
      })
      .catch((err) => reject(console.error('No se ha podido agregar el producto', err)))
  })

  const isFormValid = () => colors.length > 0 && storage.length > 0

  return (
    <section>
      <div className='backButton'>
        <Button
          variant='outlined'
          onClick={() => navigate('/home')}
          color='error'
          startIcon={<BackIcon />}
        >
          Volver
        </Button>
      </div>
      {mobile && Object.keys(mobile).length
        && (
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
                      value={colors}
                      label='Color'
                      onChange={handleChangeColor}
                    >
                      {mobile.options.colors.map((color:OptionValues) => (
                        <MenuItem
                          key={color.code}
                          value={color.code}
                        >
                          {color.name}
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
                  onClick={() => addToCar()}
                  disabled={!isFormValid()}
                >
                  Añadir a la cesta

                </Button>
                {' '}
                {/** indetificador, codigoColor, codigoCapacidad */}

              </section>

            </Grid>

          </Grid>
        </Box>
        )}
    </section>

  )
}

export default ProductDetailPage
