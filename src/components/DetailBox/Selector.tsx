import React, { ChangeEvent, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
import {
  OptionValues,
  ProductDetail,
} from '../../views/ProductDetail/ProductDetailActions'

function Selector({
  value, label, onHandle, menuItems,
}:{
    value:string;
    label: string;
    onHandle: ((event: SelectChangeEvent<string>, child: React.ReactNode) => void);
    menuItems: OptionValues[] }) {
  return (
    <FormControl fullWidth>
      <InputLabel id='color-label'>{label}</InputLabel>
      <Select
        labelId={`${label}-select`}
        id={`${label}-select`}
        value={value}
        label={label}
        onChange={onHandle}
      >
        {menuItems.map((item:OptionValues) => (
          <MenuItem
            key={item.code}
            value={item.code}
          >
            {item.name}
          </MenuItem>
        ))}

      </Select>
    </FormControl>

  )
}

export default Selector
