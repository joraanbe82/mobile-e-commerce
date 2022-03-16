import React from 'react'

import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'

import {
  OptionValues,
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
