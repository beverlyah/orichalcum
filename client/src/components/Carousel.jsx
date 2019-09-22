import React, { useState, useEffect } from 'react';

// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, CircularProgress } from '@material-ui/core';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';

// React Components
import Image from './Image.jsx';


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

/* close but not responsive nor are there buttons to execute the transition
import React from 'react'
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from './Image.jsx';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    width: '100%',
    height: '573px',
    backgroundColor: '#eeeeee',
  },
  carousel: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  }
}));


const Carousel = (props) => {
  const classes = useStyles();
  const photos = props.photos;
  return (
    <div className={classes.root}>
      <span className={classes.carousel}>
        <div style={{
          transform: `translateX(375px)`,
          transition: 'transform ease-out 0.5s',
        }}>
          {
            photos.map((photo, i) => {
              return (
                <Image key={i} imageURL={photo.url} />
              )
            })
          }
        </div>
      </span>
    </div>
  )
}

export default Carousel;
*/

/* Trial one
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    width: '90%'
  },
  img: {
    width: '660px'
  },

}));


const Carousel = (props) => {
  const classes = useStyles();
  const photos = props.photos;
  return <div className={classes.root}>
    <span className={classes.carousel}>{
      photos.map((photo, i) => {
        return (
          <div key={i} className={classes.img} ></div>
        )
      })
    }</span>

  </div>
}

export default Carousel;
*/

/* Trial two
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from './Image.jsx';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    width: '90%'
  },
  img: {
    width: '660px'
  },

}));


const Carousel = (props) => {
  const classes = useStyles();
  const photos = props.photos;
  return (
    <div className={classes.root}>
      <span className={classes.carousel}>
        {
          photos.map((photo, i) => {
            return (
              <Image key={i} imageURL={photo.url} />
            )
          })
        }
      </span>
    </div>
  )
}

export default Carousel;
*/

/* Works

import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
// Material UI Components
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton, CircularProgress } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import BackArrow from '@material-ui/icons/ArrowBack';
import NextArrow from '@material-ui/icons/ArrowForward';
import ZoomIcon from '@material-ui/icons/Fullscreen';
// React Components
import Image from './Image.jsx';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'nowrap',
    width: '100%',
    height: '573px',
    backgroundColor: grey[200],
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
  },
  zoomIcon: {
    position: 'relative',
    width: 24,
    height: 24,
    top: theme.spacing(1),
    right: theme.spacing(1),
  },
  progress: {
    margin: theme.spacing(1),
  },
}));

const Carousel = props => {
  const classes = useStyles();

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

  const goToPreviousSlide = () => {
    if (currentIndex === 0) {
      return;
    }

    setCurrentIndex(currentIndex - 1);
    setTranslateValue(translateValue + slideWidth);
  };

  const goToNextSlide = () => {
    if (images) {
      if (currentIndex === images.length - 1) {
        return setCurrentIndex(0), setTranslateValue(0);
      }
    }

    setCurrentIndex(currentIndex + 1);
    setTranslateValue(translateValue + -slideWidth);
  };

  const [click, setClick] = useState(true);

  const [imgColumns, setImgColumns] = useState(8);
  const [styleColumns, setStyleColumns] = useState(4);

  const handleThumbnailClick = index => {
    setTranslateValue(index * -slideWidth);
  };

  return (
    <Box className={classes.root}>

      <Box className={classes.slider} style={sliderWidth}>
        <IconButton
          className={clsx(classes.arrow, classes.backArrow)}
          onClick={goToPreviousSlide}>
          <BackArrow />
        </IconButton>
        <Box
          className={classes.sliderWrapper}
          style={{
            transform: `translateX(${translateValue}px)`,
            transition: 'transform ease-out 0.5s',
          }}
          onClick={() => {
            click
              ? (setImgColumns(8), setStyleColumns(4))
              : (setImgColumns(12), setStyleColumns(12));
            props.changeSize(imgColumns, styleColumns);
            setClick(!click);
          }}>
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
          onClick={goToNextSlide}>
          <NextArrow />
        </IconButton>
      </Box>
      <IconButton
        className={classes.zoomIcon}
        onClick={() => {
          setClick(!click);
          click
            ? (setImgColumns(8),
              setStyleColumns(4),
              setSliderWidth({ width: 1000 }),
              setSlideWidth(1000))
            : (setImgColumns(12),
              setStyleColumns(12),
              setSliderWidth({ width: 750 }),
              setSlideWidth(750));
          props.changeSize(imgColumns, styleColumns);
        }}>
        <ZoomIcon />
      </IconButton>
    </Box>
  );
};

export default Carousel;

*/