// get one product
import { CHANGE_PRODUCT } from '../types';

const changeProduct = id => {
  return {
    type: CHANGE_PRODUCT,
    payload: id
  }
};

export default changeProduct;