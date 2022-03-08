import axios from 'axios'
import { Product } from '../../views/ProductList/ProductListActions'

const instance = axios.create({
  baseURL: process.env.REACT_APP_URL,
})

export const fetchProducts = (): Promise<Product[]> => new Promise((resolve, reject) => {
  instance
    .get<Product[]>('/api/product')
    .then((response) => {
      if (response.status === 200) {
        resolve(response.data)
      }
    })
    .catch((error) => reject(console.error('Error in fetchProduct', error)))
})
