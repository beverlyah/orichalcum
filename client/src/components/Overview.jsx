import React, { Component } from 'react'
import Carousel from './Carousel.jsx';

class Overview extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.products('1')
  }


  render() {

    console.log('props in overview: ', this.props);
    return <Carousel results={this.props.productStyles.results} index={0} />
  }
}

export default Overview


/**
 * <div>{
      productStyles.results[0].photos.map((photo, i) => {
        return (
          <div key={i} style={`background-url: ${photo.url}`}></div>
        )
      })
    }</div>
 */