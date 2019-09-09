// has to be name index.js for webpack to bundle this appropriately.

import axios from 'axios';
import { GET_PRODUCT_STYLES, GET_PRODUCT } from './types';

export const getProduct = productId => async dispatch => {
  const res = await axios.get(`http://18.237.106.121:3000/products/${productId}`);

  dispatch({ type: GET_PRODUCT, payload: res.data });
};

export const getProductStyles = productId => async dispatch => {
  const res = await axios.get(
    `http://18.237.106.121:3000/products/${productId}/styles`
  );
  dispatch({ type: GET_PRODUCT_STYLES, payload: res.data });
};
