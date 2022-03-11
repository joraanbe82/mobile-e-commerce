import React from 'react'
import { useNavigate } from 'react-router-dom'

import BackIcon from '@mui/icons-material/ReplyOutlined'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

import './Error404.css'

function Error404Page() {
  const navigate = useNavigate()
  return (

    <div className='div404'>
      <Typography variant='h1' color='inherit'>
        404
      </Typography>

      <Typography variant='h5' color='textSecondary'>
        La dirección que buscas no se ha podido encontrar
      </Typography>

      <div>
        <Button
          color='error'
          variant='contained'
          onClick={() => navigate('/home')}
          startIcon={<BackIcon />}
        >
          Volver
        </Button>
      </div>

    </div>

  )
}

export default Error404Page
