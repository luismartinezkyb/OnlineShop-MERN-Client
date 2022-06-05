import React, { Fragment, useState, useEffect } from 'react';
import { Button, Typography } from '@material-ui/core';
import { useParams } from "react-router-dom";
import axios from 'axios'; //importacion axios
import { useDispatch, useSelector } from 'react-redux';
import {getOneProduct} from '../../../redux/productsDucks';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

import useStyles from './styles';



const Product = (props) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    const [productSent, setProductSent] = useState({quantity:'1',})
    const {id} = useParams();
    const handleSubmit = (e) =>{
        e.preventDefault();

        console.log(products);
        console.log(productSent);
    }

    useEffect(()=>{
            dispatch(getOneProduct(id));
            
    }, [dispatch]);
    const products = useSelector((state)=> state.products);
    return (
        <Fragment>
            
                <div className="container">
                    {products.map((product)=>(
                        <section key={product._id} className="container sproduct my-5 pt-5">
                        <div className="row">
                            <div className="col-lg-5 col-md-12 col-12">
                                <img className="img-fluid w-80" src={product.image} alt=""/>
                                
                            </div>
                            <div className="col-lg-6 col-md-12 col-12">
                                <h6>Category: {product.Category.map(item=> (item.name))}</h6>
                                <h3>{product.name}</h3>
                                <h2 className={classes.cost}>${product.price}.00</h2> 
                                <form onSubmit={handleSubmit}>
                                <span>Quantity:</span><input type="number" value={productSent.quantity} onChange={(e) => setProductSent({...productSent, quantity:e.target.value})}/>
                                <span className="badge bg-dark m-3"> Stock: {product.stock}</span>
                                
                                    <Button  
                                    type="submit"
                                    size="small" 
                                    fullWidth
                                    className={classes.juanito}
                                    variant="contained">
                                Add to cart
                                </Button>
                                </form>
                                

                                <h4 className="mt-3 mb-3 ">Product details</h4>
                                <span>{product.description}</span>
                                
                                <h4 className="mt-3 mb-3 ">Supplier: {product.Supplier.map(item => (item.name))}</h4>
                                <div className="mt-3 align-items-center">
                                    <div className={classes.star}
                                    ><StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarIcon/>
                                    <StarBorderIcon/>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>   
                        
                    ))}
                    
                    
                    
                </div>
                
            
            
            
            
              
              
        </Fragment>
    );
};



export default Product;
