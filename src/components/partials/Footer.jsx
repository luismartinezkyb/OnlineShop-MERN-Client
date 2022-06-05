import React, { Fragment } from 'react';

import {BottomNavigation, Typography, Grid} from '@material-ui/core'
import {makeStyles} from '@material-ui/core';
import { Divider } from '@mui/material';
const useStyles = makeStyles({
        fondo: {
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53 90%)',
            

        },
        fondo2: {
            background: 'linear-gradient(45deg, #FE6B8B, #FF8E53 70%)',
          }
        
});
        

//import { BottomNavigation } from '@mui/material';
//https://mui.com/material-ui/react-bottom-navigation/
const Footer = () => {
    const classes = useStyles();
    return (
         <Fragment>
            
            <footer className="text-center text-white " >
                <div className={classes.fondo2}>
                <div className="container p-4">
                      
                      <div className="row">
                        
                        <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                          <h5 className="text-uppercase">About Us</h5>

                          <p>
                            Online Shop es una tienda virtual en donde el usuario podrá crearse 
                            una cuenta para poder comprar cualquier tipo de productos, somos una 
                            tienda 100% mexicana la cual tiene su sede en Guadalajara, Jalisco.
                          </p>
                        </div>
                        

                        
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                          <h5 className="text-uppercase">Links</h5>

                          <ul className="list-unstyled mb-0">
                            <li>
                              <a href="/" className="text-white">Home</a>
                            </li>
                            <li>
                              <a href="/charts" className="text-white">Charts</a>
                            </li>
                            <li>
                              <a href="/signup" className="text-white">SignUp</a>
                            </li>
                            <li>
                              <a href="/graphics" className="text-white">Graphics</a>
                            </li>
                          </ul>
                        </div>
                        

                        
                        <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
                          <h5 className="text-uppercase mb-0">Categories</h5>

                          <ul className="list-unstyled">
                            <li>
                              <a href="#!" className="text-white">All products</a>
                            </li>
                            <li>
                              <a href="#!" className="text-white">Electronics</a>
                            </li>
                            <li>
                              <a href="#!" className="text-white">Pharmacy</a>
                            </li>
                            <li>
                              <a href="#!" className="text-white">Books</a>
                            </li>
                          </ul>
                        </div>
                        
                      </div>
                      
                    </div>
                    
                </div>
                <Divider/>
                <div className={classes.fondo}>
                  <div className="text-center text-dark p-3" >
                    © 2020 Copyright:
                    <a className="text-dark" href="https://mdbootstrap.com/">Online Store</a>
                  </div>
                </div>
            </footer>
            
        </Fragment>
    );
};


export default Footer;
