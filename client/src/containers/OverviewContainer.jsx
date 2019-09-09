import { connect } from 'react-redux';
import Overview from '../components/overview/Overview.jsx';
import * as actions from '../actions';

// the container prop is the prop that the component is 
// going to be looking for.

// the store property listed below comes from the main root reducer property name

const mapStateToProps = store => ({
  id: store.productId,
  product: store.product,
  styles: store.styles,
});

const OverviewContainer = connect(
  mapStateToProps,
  actions
)(Overview);

export default OverviewContainer;

