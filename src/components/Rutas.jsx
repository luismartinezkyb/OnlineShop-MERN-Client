import React, { Fragment, useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Button } from "@material-ui/core";

//Components 

//menu
import Charts from './menu/Charts';
import Home from './menu/Home';

//products
import Products from './products/Products';
import Product from './products/product/Product';

//user
import SignUp from './users/session/SignUp';
import SignIn from './users/session/SignIn';

//routes PRivates
import App from '../App';
import Secret from './users/session/Secret';
import PrivateRoute from './PrivateRoute';
import NavBar from './partials/NavBar';


const Rutas = (props) => {

    
    return (

    	<Router>
	      <div className="container"> 
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>

          <Route path="/home" element={<Home/>} exact/>
          
          <Route path="/products" element={<Products/>} exact>
            </Route>
          <Route path="/products/:id" element={<Product/>} exact>
            </Route>
          <Route path="/charts" element={<Charts/>} exact>
            </Route>
          <Route path="/signup" element={<SignUp/>} exact>
            </Route>
          <Route path="/signin" element={<SignIn/>} exact/>

          <Route path="/secret" element={<Secret/>} exact/>
  
          <Route path="*" element={<h1>404 | Page Not Found</h1>}/>
        </Routes>
      </div>
    </Router>
        
    );
};
export default Rutas;

