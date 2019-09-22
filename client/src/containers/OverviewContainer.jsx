import Overview from '../components/Overview.jsx';
import { connect } from 'react-redux';
import { getProduct, getProductStyles } from '../actions/index.js';

const mapStateToProps = state => ({
  productId: state.productId,
  productInfo: state.productInfo,
  productStyles: state.productStyles
})

const mapDispatchToProps = dispatch => ({
  products: productId => {
    dispatch(getProduct(productId))
    dispatch(getProductStyles(productId));
  }
})

const OverviewContainer = connect(mapStateToProps, mapDispatchToProps)(Overview);

export default OverviewContainer