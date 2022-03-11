import axios from 'axios'
import { ProductDetail } from '../../views/ProductDetail/ProductDetailActions'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
})

export const fetchDetails = (id: string):
  Promise<ProductDetail> => new Promise((resolve, reject) => {
  instance
    .get<ProductDetail>(`/api/product/${id}`)
    .then((response) => {
      if (response.status === 200) {
        resolve(response.data)
      }
    })
    .catch((error) => reject(console.error('Error in fetchProduct', error)))
})
