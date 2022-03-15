import axios from 'axios'
import { Cart } from '../../views/ProductDetail/ProductDetailActions'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
})

interface CartResponse {
  count: number
}

export const fetchAddToCart = ({ id, colorCode, storageCode }: Cart):
   Promise<CartResponse> => new Promise((resolve, reject) => {
  instance.post('/api/cart', {
    id,
    colorCode,
    storageCode,
  })
    .then((response) => {
      if (response.status === 200) {
        resolve(response.data.count)
      }
    })
    .catch((err) => reject(console.error('No se ha podido agregar el producto', err)))
})
