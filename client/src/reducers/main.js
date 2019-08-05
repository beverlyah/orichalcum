import addReviewReducer from './addReviewReducer.js';
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    addReview: addReviewReducer
});

export default rootReducer;