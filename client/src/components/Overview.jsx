import React, { Component, Fragment } from 'react'
import Carousel from './Carousel.jsx';
import { Grid } from '@material-ui/core'

class Overview extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.products('1')
  }


  render() {

    console.log('props in overview: ', this.props);
    return <Fragment>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <Carousel results={this.props.productStyles.results} index={0} />
        </Grid>
        <Grid item xs={4} >
          <div>
            <span>
              Stars
            </span>
            <span>
              Reviews
            </span>
          </div>
          <div>Product type</div>
          <div>Product Title/Name</div>
          <div>Price</div>
          <div>Style - Title</div>
          <div>List of wrapped style circles</div>
          <div>
            <span>Inline size - Drop down list </span> <span>Quanity - Drop Down list</span>
          </div>
          <div>
            <span>Add to cart button </span> <span>Share button</span>
          </div>
        </Grid>

      </Grid>

    </Fragment >
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