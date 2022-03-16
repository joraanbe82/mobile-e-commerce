import React from 'react'
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

import { Product } from '../../views/ProductList/ProductListActions'

function ListItem({ data }:{data: Product[]}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{ justifyContent: 'center' }}
      >
        {data.map((product) => (
          <Grid key={product.id} item xs={3} sx={{ textAlign: 'center' }}>
            <Card sx={{ boxShadow: '2px 4px 4px 4px grey', padding: '3px' }}>
              <CardHeader
                title={product.model}
                subheader={`${product.brand}  ${product.price} €`}
              />
              <Link to={`/detail/${product.id}`}>
                <CardMedia
                  component='img'
                  image={product.imgUrl}
                  alt={product.model}
                />
              </Link>
            </Card>

          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default ListItem
