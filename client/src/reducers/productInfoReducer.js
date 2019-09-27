import { GET_PRODUCT } from '../actions/types'
import { productInfo } from '../data/defaultData'

const productInfoReducer = (state = productInfo, { type, payload }) => {
  switch (type) {
    case GET_PRODUCT:
      return payload;
    default:
      return state;
  }
}

export default productInfoReducer;