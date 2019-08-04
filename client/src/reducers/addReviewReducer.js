const addReviewReducer = (state={
    reviews: ['Leave a review']
}, action) => {

    switch(action.type) {
        case 'ADD_REVIEW': {
            state.reviews.push(action.payload);
            return state;
        }   
        default:
            return state;
    }
}

export default addReviewReducer