import addReviewReducer from './addReviewReducer.js';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    reviews: addReviewReducer
});

export default rootReducer;