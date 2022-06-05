import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';

import Home from './menu/Home';
import NavBar from './partials/NavBar';
import Footer from './partials/Footer';

const PrivateRoute = (props) => {
    const user = "Horacio";
    return (
        <Fragment>
            Hola
        </Fragment>
    );
};

export default PrivateRoute;
