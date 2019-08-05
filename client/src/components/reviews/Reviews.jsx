import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';




const Reviews = ({reviews}) => {
    console.log('reviews: ', reviews);

    const useStyles = makeStyles(theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1),
          width: 200,
        },
        dense: {
          marginTop: 19,
        },
        menu: {
          width: 200,
        },
      }));
 
    const classes = useStyles();

    return (
        <React.Fragment>
            <div id="reviews" style={{ float: 'left' }}>
                hello hell0
            </div>
            <TextField
                id="standard-textarea"
                label="Leave a review"
                placeholder="type here..."
                multiline
                className={classes.textField}
                margin="normal"
            />
            <Button variant="contained" color="black" background-color="#fffafa">
                Add a review
            </Button>
        </React.Fragment>
    )
}

export default Reviews