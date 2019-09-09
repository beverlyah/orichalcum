
import { combineReducers } from 'redux'
import IdReducer from './idReducer.js';
import getProductReducer from './getProductReducer.js';
import getProductStylesReducer from './getProductStylesReducer.js';

const rootReducer = combineReducers({
    productId: IdReducer,
    product: getProductReducer,
    styles: getProductStylesReducer
});

export default rootReducer;