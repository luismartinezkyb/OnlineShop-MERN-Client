import React, { Fragment, useState, useEffect} from 'react';

import { Routes, Route, Link, useRoutes,} from "react-router-dom";

import { Button } from "@material-ui/core";

//Components 
//partials
import NavBar from './components/partials/NavBar';
import Footer from './components/partials/Footer';

import Home from './components/menu/Home';
import Charts from './components/menu/Charts';

//products
import Products from './components/products/Products';
import Product from './components/products/product/Product';

//user
import SignUp from './components/users/session/SignUp';
import SignIn from './components/users/session/SignIn';

//routes PRivates
import Secret from './components/users/session/Secret';
import Rutas from './components/Rutas';

import "react-toastify/dist/ReactToastify.css";

function App(props) {
  
  return (
    <Fragment>
        
        <Rutas/>
        <Footer/>
    </Fragment>
  );
}

export default App;
