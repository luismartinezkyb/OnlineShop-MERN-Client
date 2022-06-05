import React, { Fragment } from 'react';
import { Button, Card, Typography,  CardActions, CardContent, CardActionArea, CardMedia, Container, Grow, Grid } from '@material-ui/core';
import { IconButton, AppBar, Toolbar } from '@mui/material';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import MenuIcon from '@mui/icons-material/Menu';
import {makeStyles} from '@material-ui/core';
import {ThemeProvider} from '@material-ui/core/styles';
import Theme from './Theme'




const useStyles = makeStyles({
        pic: {
            width: 1200,
            height: 800
        },
        juanito: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            border: 0,
            borderRadius: 3,
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            height: 48,
            padding: "0 30px",
          },
          images: {
            width: 100,
        },

    })
const Home = () => {
    const classes = useStyles();

    return (
        <ThemeProvider theme={Theme}>
        	
            
            <div className="container">
                <a href="/signUp"></a>
            </div>
            
        	
            
            <Button className={classes.juanito} variant="contained" fullWidth href="/signup">
                Welcome to our web store
            </Button>


            
           
            
        </ThemeProvider>
    );
};


export default Home;
