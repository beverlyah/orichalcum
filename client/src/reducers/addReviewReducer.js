const initialState = [
    [
        'newUser',
        'leave a review'
    ]
  ];
  

const addReviewReducer = (state=initialState, action={}) => {

    if ( action.type === 'ADD_REVIEW') {
        return action.payload;
    }
    return state;
}

export default addReviewReducer