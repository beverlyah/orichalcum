// image is  mad blurry need to fix
// need to enable array of images to work with click
// buttons don't work
// buttons don't overlap on image
// add zoom in feature
// add styles icons
// add thumbnails

import React, { useState, useEffect } from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Arrow from './Arrow.jsx';
import ImageSlide from './ImageSlides.jsx';

const Carousel = (props) => {


  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log('currentImageIndex: ', currentImageIndex);
  const [imgUrl, setImgUrl] = useState(['https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'])
  console.log('imgUrl: ', imgUrl);
  console.log('imgUrl[0]: ', imgUrl[0]);


  const previousSlide = () => {
    const lastIndex = imgUrl.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

    setCurrentImageIndex(index);
  }

  const nextSlide = () => {
    const lastIndex = imgUrl.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;

    setCurrentImageIndex(index);

  }

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'nowrap',
      width: '99%',
      height: '75vh',
    },
    sliderWrapper: {
      position: 'relative',
      width: '100%',
      height: '100%',
    },
    carousel: {
      background: '#eeeeee',
      position: 'relative',
      height: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
    },
    thumbnail: {
      background: '#eeeeee'
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={1} className={classes.thumbnail}><div>space</div></Grid>
        <Grid item xs={7} className={classes.carousel}>
          <Arrow
            direction="left"
            clickFunction={previousSlide}
            glyph="&#9664;" 
            className={classes.leftArrow}
          />
          <Box className={classes.sliderWrapper}>
            <ImageSlide url={imgUrl[currentImageIndex]} />
          </Box>

          <Arrow
            direction="right"
            clickFunction={nextSlide}
            glyph="&#9654;"
            className={classes.rightArrow}
          />
        </Grid>
        <Grid item xs={3} className={classes.productsInfo}>
          xs=3
        </Grid>
      </Grid>
    </div>
  );
}

export default Carousel;

