import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
  "mdbreact";

const Carousel = () => {

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#78b50e',
    },
    carousel: {
      background: '#b50e48',
    },
    paper: {
      padding: theme.spacing(0),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        <Grid item xs={7} className={classes.carousel}>
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={false}
              className="z-depth-1"
              slide
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(45).jpg"
                      alt="First slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(46).jpg"
                      alt="Second slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src="https://mdbootstrap.com/img/Photos/Slides/img%20(47).jpg"
                      alt="Third slide"
                    />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        </Grid>
        <Grid item xs={5} className={classes.productsInfo}>
          xs=5
        </Grid>
      </Grid>
    </div>
  );
}

export default Carousel;

