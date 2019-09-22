import { GET_PRODUCT } from '../actions/types'
import { productStyles } from '../data/defaultData'

const productInfoReducer = (state = productStyles, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return payload;
    default:
      return state;
  }
}

export default productInfoReducer;