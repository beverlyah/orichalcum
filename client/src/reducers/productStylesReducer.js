import { productStyles } from '../data/defaultData';
import { CHANGE_PRODUCT_STYLES } from '../actions/types';

const productStylesReducer = (state = productStyles, { type, payload }) => {
  switch (type) {
    case CHANGE_PRODUCT_STYLES:
      return payload;
    default:
      return state;
  }
}

export default productStylesReducer;