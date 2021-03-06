import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import BackIcon from '@mui/icons-material/ReplyOutlined'
import Button from '@mui/material/Button'

import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { ActionType } from '../../action-types'

import DetailBox from '../../components/DetailBox/DetailBox'

import './ProductDetail.css'

function ProductDetailPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const mobile = useAppSelector((state) => state.details.data)
  const error = useAppSelector((state) => state.details.errorMessage)

  useEffect(() => {
    if (id) {
      dispatch({ type: ActionType.GET_DETAIL, payload: id })
    }
  }, [id, dispatch])

  return (
    <section>
      <div className='backButton'>
        <Button
          variant='outlined'
          onClick={() => navigate('/home')}
          color='error'
          startIcon={<BackIcon />}
        >
          Volver
        </Button>
      </div>
      {!error && id && mobile && Object.keys(mobile).length
        && (
          <DetailBox />
        )}
      {error && <div className='errorMessage'><h3>{error}</h3></div>}
    </section>

  )
}

export default ProductDetailPage
