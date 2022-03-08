import React from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import GrainIcon from '@mui/icons-material/Grain'

import './Breadcrumb.css'

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault()
  console.info('You clicked a breadcrumb.')
}

export default function BreadcrumbsComponent({ page }: {page:string}) {
  return (
    <div role='presentation' onClick={handleClick} className='breadcrumb'>
      <Breadcrumbs aria-label='breadcrumb' separator='>'>
        <Link
          underline='hover'
          sx={{ display: 'flex', alignItems: 'center' }}
          color={page === 'home' ? 'text.primary' : 'inherit'}
          href='/home'
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Home
        </Link>
        <Link
          underline='hover'
          sx={{ display: 'flex', alignItems: 'center' }}
          color={page === 'detail' ? 'text.primary' : 'inherit'}
          href='/detail'
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Detail
        </Link>

      </Breadcrumbs>
    </div>
  )
}
