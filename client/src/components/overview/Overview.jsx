import React from 'react';
import Box from '@material-ui/core/Box';
import { fade, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const Overview = () => {

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
          xs=7
        </Grid>
        <Grid item xs={5} className={classes.productsInfo}>
          xs=5
        </Grid>
      </Grid>
    </div>
  );
}

export default Overview;

