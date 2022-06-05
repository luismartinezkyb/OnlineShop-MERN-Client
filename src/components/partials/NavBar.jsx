import React, { Fragment, useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, makeStyles} from '@material-ui/core'
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {useCookies} from 'react-cookie';
import {useNavigate, Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({
    offset: {
        ...theme.mixins.toolbar, // min-height: 56px;
        marginBottom: "1rem", // margen opcional
      },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    routes: {
        margin: "1rem",
    },
    navbar: {
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
            
            boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
            color: "white",
            
          },
    
}))

const NavBar = (props) => {
    const navigate = useNavigate();
    const [cookies, setCookie, removeCookie] = useCookies([]);
    console.log(cookies);
    
    
        //crear unos props donde si existen el mandamos al navbar el nombre de lo contrario neh
    const [user, setUser] = useState({})  
    
    const logOut = () =>{
        removeCookie('jwt');
        navigate('/signin')
    }
    const classes = useStyles();
    return (
         <Fragment>
            <AppBar className={classes.navbar}>
                <Toolbar>
                    <IconButton className={classes.menuButton} aria-label="menu" color="inherit"> <MenuIcon/></IconButton>
                    <Typography variant="h5" className={classes.title}>
                        Online Store
                    </Typography>
                    <Button className={classes.routes}  href="/" variant="text" color="inherit" >
                        Home
                    </Button>
                    <Button className={classes.routes} href="/products" variant="text" color="inherit" >
                        Products
                    </Button>
                    <Button className={classes.routes} href="/charts" variant="text" color="inherit" >
                        Charts
                    </Button>
                    <Button className={classes.routes} href="/signup" variant="outlined" color="inherit" >
                        Register
                    </Button>
                    <IconButton aria-label="cart" href="/ordercart">
                      <ShoppingCartIcon />
                    </IconButton>
                    {!cookies.jwt ? (<Button className={classes.routes} href="/signin" variant="outlined" color="inherit" >
                        LogIn
                    </Button>):(<Button className={classes.routes} onClick={logOut} variant="outlined" color="inherit" >
                        LogOut
                    </Button>)}
                    
    
                    
                </Toolbar>
            </AppBar>
            <div className={classes.offset}></div>
        </Fragment>
    );
};



export default NavBar;
