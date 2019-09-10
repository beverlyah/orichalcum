import React, { useState, useEffect, Fragment } from 'react';
// Material UI Components
import { Grid, Typography } from '@material-ui/core';
// React Components
import Carousel from './Carousel.jsx';


const Product = props => {
  const [styles, setStyles] = useState(props.styles);
  const [currentStyleIndex, setcurrentStyleIndex] = useState(0);

  useEffect(() => {
    setStyles(props.styles);
  });

  const changeCurrStyle = index => {
    setcurrentStyleIndex(index);
  };

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const changeGridSize = (img, style) => {
    setImgColumns(img);
    setStyleColumns(style);
  };

  return (
    <Fragment>
      <Grid container direction="row">
        <Grid item sm={12} md={imgColumns}>
          <Carousel
            styles={styles}
            index={currentStyleIndex}
            changeSize={changeGridSize}
          />
        </Grid>

      </Grid>
    </Fragment>
  );
};

export default Product;
