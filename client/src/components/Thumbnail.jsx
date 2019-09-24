import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    height: '200%'
  },
}));

const Thumbnail = ({ thumbnail }) => {
  const classes = useStyles();

  const styles = {
    backgroundImage: `url(${thumbnail})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  };

  return <div className={classes.slide} style={styles} />;
};

export default Thumbnail;