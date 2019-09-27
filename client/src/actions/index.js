// has to be name index.js for webpack to bundle this appropriately.

// get all info for 1 product including styles
import axios from 'axios';
import changeProduct from './overview/changeProduct';
import productInfo from './overview/productInfo'
import productStyles from './overview/productStyles'

export const getProduct = productId => {

  return async dispatch => {
    const res = await axios.get(`http://18.217.220.129/products/${productId}`);
    console.log('res.data: ', res.data);
    dispatch(changeProduct(productId));
    dispatch(productInfo(res.data));


  }
}

export const getProductStyles = productId => {

  return async dispatch => {
    const res = await axios.get(`http://18.217.220.129/products/${productId}/styles`);

    dispatch(productStyles(res.data));
  }
}