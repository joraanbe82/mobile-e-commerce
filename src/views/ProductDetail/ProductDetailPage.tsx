import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

import { useAppDispatch, useAppSelector } from '../../store/hooks'

import Navbar from '../../components/Navbar/Navbar'
import { ActionType } from '../../action-types'

function ProductDetailPage() {
  const { id } = useParams()
  const dispatch = useAppDispatch()
  const mobile = useAppSelector((state) => state.details.data)

  useEffect(() => {
    if (id) {
      dispatch({ type: ActionType.GET_DETAIL, payload: id })
    }
  }, [id, dispatch])

  console.log({ mobile })

  return (
    <>
      <Navbar />
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
                <select>Almacenamiento</select>
                <select>Colores</select>
                <button type='button'>Añadir a la cesta</button>
                {' '}
                {/** indetificador, codigoColor, codigoCapacidad */}

              </div>
            </section>

          </Grid>

        </Grid>
      </Box>
    </>
  )
}

export default ProductDetailPage
