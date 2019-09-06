
import { combineReducers } from 'redux'
import IdReducer from './idReducer.js';

const rootReducer = combineReducers({
    productId: IdReducer
});

export default rootReducer;