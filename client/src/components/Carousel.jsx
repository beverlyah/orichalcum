import React, { useState, useEffect } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, CircularProgress } from '@material-ui/core';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';

// React Components
import Image from './Image.jsx';
import Thumbnail from './Thumbnail.jsx';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
    height: '573px',
    backgroundColor: '#eeeeee'
  },
  carouselWindow: {
    position: 'relative',
    margin: '0 auto',
    overflow: 'hidden',
    whiteSpace: 'nowrap'
  },
  carouselWrapper: {
    width: '100%',
    height: '100%'
  },
  leftArrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    left: 25,
    zIndex: 1
  },
  rightArrow: {
    height: '50px',
    width: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: '50%',
    right: 25,
    zIndex: 1
  },
  thumbnails: {

  },

  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = ({ results, index }) => {
  const classes = useStyles();

  const [images, setImages] = useState();

  useEffect(() => {
    if (results) {
      setImages(results[index].photos);
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const [translateValue, setTranslateValue] = useState(0);


  const goToPreviousSlide = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + 750);
  };

  const goToNextSlide = () => {
    if (images) {
      if (currentIndex === images.length - 1) {
        return setCurrentIndex(0), setTranslateValue(0);
      }
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -750);
  };

  return (
    <div className={classes.root}>
      <div className={classes.thumbnails}>
        {images ? (
          images.map((image, i) => (
            <Thumbnail key={i} thumbnail={image.thumbnail_url} />
          ))
        ) : (
            <CircularProgress className={classes.progress} />
          )}
      </div>

      <div className={classes.carouselWindow} style={{ width: 750 }}>

        <IconButton
          className={classes.leftArrow}
          onClick={goToPreviousSlide}>
          <BackArrow />
        </IconButton>
        <div
          className={classes.carouselWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}
        >
          {images ? (
            images.map((image, i) => (
              <Image key={i} image={image.url} />
            ))
          ) : (
              <CircularProgress className={classes.progress} />
            )}
        </div>
        <IconButton
          className={classes.rightArrow}
          onClick={goToNextSlide}>
          <NextArrow />
        </IconButton>
      </div>

    </div>
  );
};

export default Carousel;