import { combineReducers } from 'redux';
import productIdReducer from './productIdReducer';
import productInfoReducer from './productInfoReducer';
import productStylesReducer from './productStylesReducer';
import metaReducer from './metaReducer.js';

const rootReducer = combineReducers({
  productId: productIdReducer,
  productInfo: productInfoReducer,
  productStyles: productStylesReducer,
  metaInfo: metaReducer
});

export default rootReducer;
