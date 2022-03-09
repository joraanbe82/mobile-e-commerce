import React from 'react'
import { useNavigate } from 'react-router-dom'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import MUILink from '@mui/material/Link'
import HomeIcon from '@mui/icons-material/Home'
import GrainIcon from '@mui/icons-material/Grain'

import './Breadcrumb.css'

export default function BreadcrumbsComponent({ page }: {page:string}) {
  const navigation = useNavigate()
  function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    event.preventDefault()
  }

  return (
    <div role='presentation' onClick={handleClick} className='breadcrumb'>
      <Breadcrumbs aria-label='breadcrumb' separator='>'>
        <MUILink
          underline='hover'
          sx={{ display: 'flex', alignItems: 'center' }}
          color={page === 'home' ? 'text.primary' : 'inherit'}
          href='/home'
          onClick={() => navigation('/home')}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize='inherit' />
          Inicio
        </MUILink>
        {page === 'detail'
           && (
           <MUILink
             underline='hover'
             sx={{ display: 'flex', alignItems: 'center' }}
             color={page === 'detail' ? 'text.primary' : 'inherit'}
             href='/detail'
           >
             <GrainIcon sx={{ mr: 0.5 }} fontSize='inherit' />
             Detalles
           </MUILink>
           )}
      </Breadcrumbs>
    </div>
  )
}
