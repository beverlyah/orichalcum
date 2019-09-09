import React from 'react';
import Carousel from './Carousel.jsx';
import axios from 'axios';
import store from '../../store/store.js'
class Overview extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.id)
    this.props.getProductStyles(this.props.id)
  }

  render() {

    return (
      <Carousel />
    );
  }
}

export default Overview;

