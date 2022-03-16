import React from 'react'

import Box from '@mui/material/Box'

import { useAppSelector } from '../../store/hooks'
import DetailGrid from './DetailGrid'

function DetailBox() {
  const mobile = useAppSelector((state) => state.details.data)

  return (
    <Box sx={{ flexGrow: 1 }} className='box'>
      <DetailGrid mobile={mobile} />
    </Box>
  )
}

export default DetailBox
