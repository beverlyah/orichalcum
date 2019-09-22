import { GET_PRODUCT } from '../types'

const getProduct = product => ({
  type: GET_PRODUCT,
  payload: product
});

export default getProduct;