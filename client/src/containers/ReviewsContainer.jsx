import { connect } from 'react-redux';
import Reviews from '../components/reviews/Reviews.jsx';
import addReview from '../actions/addReview.js';


// review component should use a prop named reviews
const mapStateToProps = (store) => ({
    reviews: store.reviews
})

// review component should have a prop named handleAddReviewClick
// it should pass text to the action addReview
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddReviewClick: (reviewInfo) => {
            dispatch(addReview(reviewInfo));
        }
    }
}
const ReviewsContainer = connect(mapStateToProps, mapDispatchToProps)(Reviews);

export default ReviewsContainer;

