import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import Navbar from '../../components/Navbar/Navbar'
import { ActionType } from '../../action-types'
import { OptionValues } from './ProductDetailActions'

function ProductDetailPage() {
  const { id } = useParams()
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
          window.localStorage.setItem('count', response.data.count)
          // siempre responde count: 1 hay que ir sumando
          console.log('agregado al carro')
        }
      })
      .catch((error) => reject(console.error('No se ha podido agregar el producto', error)))
  })

  const isFormValid = () => colors.length > 0 && storage.length > 0

  console.log({ mobile })

  return (
    <>
      {/* <Navbar /> */}
      {mobile && Object.keys(mobile).length
        && (
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            sx={{ justifyContent: 'center' }}
          >
            <Grid item xs={4}>
              <Card>
                <CardMedia
                  component='img'
                  image={mobile.imgUrl}
                  alt={mobile.model}
                />
              </Card>

            </Grid>
            <Grid item xs={4}>
              <section>
                <h4>Detalles</h4>
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
                    <span>{mobile.displayResolution}</span>
                    <span>{mobile.displaySize}</span>
                    <span>{mobile.displayType}</span>

                  </p>
                  <p>
                    <strong>Batería: </strong>
                    {' '}
                    {mobile.battery}
                  </p>
                  <p>
                    <strong>Cámara: </strong>
                    {' '}
                    {mobile.primaryCamera.map((detail) => (
                      <span>
                        {detail}
                        {'  '}
                      </span>
                    ))}
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
                  </p>

                </div>

              </section>
              <section>
                actions

                <div>
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
                    <InputLabel id='capacity-label'>Almacenamiento</InputLabel>
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

                  <Button
                    variant='contained'
                    onClick={() => addToCar()}
                    disabled={!isFormValid()}
                  >
                    Añadir a la cesta

                  </Button>
                  {' '}
                  {/** indetificador, codigoColor, codigoCapacidad */}

                </div>
              </section>

            </Grid>

          </Grid>
        </Box>
        )}

    </>
  )
}

export default ProductDetailPage
