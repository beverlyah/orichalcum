import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'inline-block',
    height: '100%',
    width: '100%',
  },
}));

const Image = ({ image }) => {
  const classes = useStyles();

  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return <div className={classes.slide} style={styles} />;
};

export default Image;