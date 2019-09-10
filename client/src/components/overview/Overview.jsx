import React from 'react';
import Carousel from './Carousel.jsx';

class Overview extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.id)
    this.props.getProductStyles(this.props.id)
  }

  render() {


    return (
      <Carousel images={this.props.styles.results} />
    );
  }
}

export default Overview;

