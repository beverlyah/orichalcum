import React, { useState, useEffect } from 'react';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, CircularProgress } from '@material-ui/core';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
    width: '100%',
    height: '55px'
  },
  thumbnailWindow: {
    position: 'absolute',
    width: '85px',
    height: '330px',
    overflow: 'hidden',
    top: '25%'
  },
  thumbnailWrapper: {

  },
  upArrow: {
    position: 'relative',
    top: '15px',
    left: '25%'
  },
  downArrow: {
    position: 'relative',
    top: '390px',
    left: '-25%'
  },
  progress: {
    margin: theme.spacing(1),
  }
}));

const Carousel = ({ results, index }) => {
  const classes = useStyles();

  const [images, setImages] = useState();

  useEffect(() => {
    if (results) {
      setImages(results[index].photos);
    }
  });

  const [currentXIndex, setCurrentXIndex] = useState(0);
  const [currentYIndex, setCurrentYIndex] = useState(0);

  const [x_translateValue, setX_TranslateValue] = useState(0);
  const [y_translateValue, setY_TranslateValue] = useState(0);


  const goToPreviousSlide = () => {
    if (currentXIndex === 0) {
      return;
    }

    setCurrentXIndex(currentXIndex - 1);
    setX_TranslateValue(x_translateValue + 750);
  };

  const goToNextSlide = () => {
    if (images) {
      if (currentXIndex === images.length - 1) {
        return setCurrentXIndex(0), setX_TranslateValue(0);
      }
    }

    setCurrentXIndex(currentXIndex + 1);
    setX_TranslateValue(x_translateValue + -750);
  };

  const moveThumbnailsDown = () => {
    if (currentYIndex === 0) {
      return;
    }

    setCurrentYIndex(currentYIndex - 1);
    setY_TranslateValue(y_translateValue + 110) // 330 / 3 = 110 (wrapperHeight)
  }

  const moveThumbnailsUp = () => {
    if (images) {
      if (currentYIndex === images.length - 3) {
        return setCurrentYIndex(0), setY_TranslateValue(0);
      }
    }

    setCurrentYIndex(currentYIndex + 1);
    setY_TranslateValue(y_translateValue - 110);
  }

  return (
    <div className={classes.root}>
      <div className={classes.thumbnailWrapper}>
        <IconButton onClick={moveThumbnailsDown} className={classes.upArrow}>
          <ExpandLessIcon />
        </IconButton>

        <div className={classes.thumbnailWindow}>

          <div className={classes.thumbnails} style={{
            transform: `translateY(${y_translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}>
            {images ? (
              images.map((image, i) => (
                <Thumbnail key={i} thumbnail={image.thumbnail_url} />
              ))
            ) : (
                <CircularProgress className={classes.progress} />
              )}
          </div>
        </div>
        <IconButton onClick={moveThumbnailsUp} className={classes.downArrow}>
          <ExpandMoreIcon />
        </IconButton>

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
            transform: `translateX(${x_translateValue}px)`,
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