import { connect } from 'react-redux';
import Overview from '../components/Overview/Overview.jsx';



const mapStateToProps = (store) => (
  {
    productId: store.productId
  }
)

const OverviewContainer = connect(mapStateToProps)(Overview);

export default OverviewContainer;
