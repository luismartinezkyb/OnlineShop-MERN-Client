import axios from 'axios';

const url= 'http://localhost:3001/products';

export const getProducts = () => axios.get(url);

export const getOneProduct = (id) => axios.get(`${url}/id/${id}`);

export const getProductsByCategory = (category) => axios.get(`${url}/categories/${category}`);


