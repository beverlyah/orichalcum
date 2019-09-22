import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  slide: {
    display: 'block',
    height: '100%',
    width: '100%',
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