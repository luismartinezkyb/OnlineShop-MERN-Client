import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

import productReducer from './productsDucks';
import userReducer from './usersDucks';

const rootReducer = combineReducers({
    products: productReducer,
    users: userReducer, 
})

export default function generateStore() {
    const store = createStore( rootReducer, compose(applyMiddleware(thunk)));
    return store;
}

