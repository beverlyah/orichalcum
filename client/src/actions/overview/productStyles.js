import { CHANGE_PRODUCT_STYLES } from '../types.js';

const getProductStyles = styles => ({
  type: CHANGE_PRODUCT_STYLES,
  payload: styles
});

export default getProductStyles;