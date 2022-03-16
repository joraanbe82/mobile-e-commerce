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
import { OptionValues, ProductDetail } from '../../views/ProductDetail/ProductDetailActions'

import DetailInfo from './DetailInfo'
import DetailActions from './DetailActions'

function DetailGrid({ mobile }:{mobile: ProductDetail}) {
  return (
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
            <DetailInfo label='Marca' info={mobile.brand} />
            <DetailInfo label='Modelo' info={mobile.model} />
            <DetailInfo label='Precio' info={`${mobile.price} €`} />
            <DetailInfo label='CPU' info={mobile.cpu} />
            <DetailInfo label='RAM' info={mobile.ram} />
            <DetailInfo label='Sistema Operativo' info={mobile.os} />
            <DetailInfo
              label='Resolución de pantalla'
              info={[mobile.displayResolution, mobile.displaySize, mobile.displayType]}
            />
            <DetailInfo label='Batería' info={mobile.battery} />
            <DetailInfo label='Cámara principal' info={mobile.primaryCamera} />
            <DetailInfo label='Cámara secundaria' info={mobile.secondaryCmera} />
            <DetailInfo label='Dimensiones' info={mobile.dimentions} />
            <DetailInfo label='Peso' info={`${mobile.weight} gr`} />
          </div>
        </section>

        <DetailActions mobile={mobile} />

      </Grid>

    </Grid>

  )
}

export default DetailGrid
