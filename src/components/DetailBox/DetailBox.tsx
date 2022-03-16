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

import DetailInfo from './DetailInfo'
import DetailActions from './DetailActions'
import DetailGrid from './DetailGrid'

function DetailBox() {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const mobile = useAppSelector((state) => state.details.data)
  const color = useAppSelector((state) => state.details.color)
  const storage = useAppSelector((state) => state.details.storage)

  const URL = process.env.REACT_APP_URL

  return (

    <Box sx={{ flexGrow: 1 }} className='box'>

      <DetailGrid mobile={mobile} />

    </Box>

  )
}

export default DetailBox
