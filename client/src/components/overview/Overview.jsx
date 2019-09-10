import React, { Fragment } from 'react';
import { Grid, Typography, Link } from '@material-ui/core';
import Product from './Product.jsx';

class Overview extends React.Component {

  componentDidMount() {
    this.props.getProduct(this.props.id)
    this.props.getProductStyles(this.props.id)
  }

  render() {

    const { product, styles, id, ratings, totalReviews } = this.props;


    return (
      <Fragment>
        <div id="promotion">
          <Grid container direction="row" justify="center" alignItems="center">
            <div id='promotion'><Typography variant="overline" gutterBottom>
              <em>SITE-WIDE ANNOUNCEMENT MESSAGE - SALE! DISCOUNT OFFER -{' '}</em>
              <strong>30% off</strong> -{' '}
              <Link href={'1'} color="inherit" underline="always">
                Camo Onesie
            </Link>
            </Typography> </div>
          </Grid>
          <Product
            styles={styles}
            product={product}
            id={id}
            ratings={ratings}
            totalReviews={totalReviews}
          />
        </div>
      </Fragment>
    );
  }
}

export default Overview;

