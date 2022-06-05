import * as React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles({
        fondo: {
            color: '#FE6B8B',
            

        },
        fondo2: {
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53 70%)',
          }
        
});
function Title(props) {
  const classes = useStyles();
  return (
    <Typography component="h2" variant="h6" className={classes.fondo} gutterBottom>
      {props.children}
    </Typography>
  );
}

Title.propTypes = {
  children: PropTypes.node,
};

export default Title;