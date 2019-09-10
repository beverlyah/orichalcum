// image is  mad blurry need to fix
// need to enable array of images to work with click
// buttons don't work
// buttons don't overlap on image
// add zoom in feature
// add styles icons
// add thumbnails
import clsx from 'clsx';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';
import React, { useState, useEffect } from 'react';
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Arrow from './Arrow.jsx';
import ImageSlide from './ImageSlides.jsx';
import Image from './Image.jsx';


const Carousel = (props) => {
  console.log('Carousel props: ', props);

  const [images, setImages] = useState();

  useEffect(() => {
    if (props.styles.results) {
      setImages(props.styles.results[props.index].photos);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);

  const [slideWidth, setSlideWidth] = useState(750);
  const [sliderWidth, setSliderWidth] = useState({ width: 750 });

  const getLastIndex = () => {
    if (!images) {
      return
    }

    return images.length - 1;
  }

  const previousSlide = () => {
    const shouldResetIndex = currentIndex === 0;
    const index = shouldResetIndex ? 0 : currentIndex - 1

    setCurrentIndex(index);
    if (index !== 0) {
      setTranslateValue(translateValue + slideWidth);
    }
  };

  const nextSlide = () => {
    const lastIndex = getLastIndex();
    const shouldResetIndex = currentIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentIndex + 1;

    if (index === 0) {
      return setCurrentIndex(0), setTranslateValue(0);
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
  };



  const [click, setClick] = useState(true);

  const useStyles = makeStyles(theme => ({
    root: {
      display: 'flex',
      flexWrap: 'nowrap',
      width: '99%',
      height: '75vh',
    },
    slider: {
      position: 'relative',
      margin: '0 auto',
      height: 'auto',
      overflow: 'hidden',
      whiteSpace: 'nowrap',
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
    },
    arrow: {
      height: '50px',
      width: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nextArrow: {
      position: 'absolute',
      top: '50%',
      right: 25,
      zIndex: 999,
    },
    backArrow: {
      position: 'absolute',
      top: '50%',
      left: 25,
      zIndex: 999,
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>

        <Box className={classes.slider} style={sliderWidth}>
          <IconButton
            className={clsx(classes.arrow, classes.backArrow)}
            onClick={previousSlide}>
            <BackArrow />
          </IconButton>
          <Box className={classes.sliderWrapper} style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}>
            {/* <ImageSlide url={imgUrl[currentImageIndex]} /> */}
            {images ? (
              images.map((image, i) => (
                <Image key={i} image={image.url} clicked={click} />
              ))
            ) : (
                <CircularProgress className={classes.progress} />
              )}
          </Box>

          <IconButton
            className={clsx(classes.arrow, classes.nextArrow)}
            onClick={nextSlide}>
            <NextArrow />
          </IconButton>
        </Box>

      </Grid>
    </div>
  );
}

export default Carousel;

/**
 *
 *
 * const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const [imgUrl, setImgUrl] = useState(['https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'])



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
 */