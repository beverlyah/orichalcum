import { combineReducers } from 'redux';
import productIdReducer from './productIdReducer';
import productInfoReducer from './productInfoReducer';
import productStylesReducer from './productStylesReducer';

const rootReducer = combineReducers({
  productId: productIdReducer,
  productInfo: productInfoReducer,
  productStyles: productStylesReducer
});

export default rootReducer;
