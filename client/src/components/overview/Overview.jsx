import React from 'react';
import Carousel from './Carousel.jsx';

class Overview extends React.Component {

  render() {

    console.log('this.props: ', this.props);

    return (
      <Carousel />
    );
  }
}

export default Overview;

