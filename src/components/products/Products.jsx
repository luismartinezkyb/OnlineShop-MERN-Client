//import react default
import React, {Fragment, useState, useEffect} from 'react';
import {Grid, CircularProgress, Card, CardActions, CardContent, CardMedia, Button, Typography, Container, Grow, List, Divider, ListItem, ListItemIcon, ListItemText,Paper } from '@material-ui/core';
//importacion de los iconos
import MedicationIcon from '@mui/icons-material/Medication';
import DvrIcon from '@mui/icons-material/Dvr';
import BookIcon from '@mui/icons-material/Book';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import StarIcon from '@mui/icons-material/Star';



import useStyles from './styles';

import { useDispatch, useSelector } from 'react-redux';
//redux imports 
import { getProducts, getProductsByCategory } from '../../redux/productsDucks';

const Products = () => {
    const dispatch = useDispatch();
    const classes = useStyles();

    var [productsBy, setProductsBy] = useState('');

    const submitCategory = (category) =>{
        console.log(products);
        setProductsBy(category);
        if (category === "All") {
            dispatch(getProducts());
        } 
        else {
            dispatch(getProductsByCategory(category));    
        }
        
    }

    useEffect(()=>{
        if (productsBy === 'All' || productsBy === '') {
            dispatch(getProducts());
        }
        else {
            dispatch(getProductsByCategory(productsBy));

        }
        
    }, [])

    const products = useSelector((state)=> state.products);
    return (
        <Container maxidth="lg">
            <Grow in>
            <Container>
              <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
                <Grid className={classes.productsMain} item xs={12} sm={8}>
                  {!products.length ? <CircularProgress/> : (
                    <Grid container alignItems="stretch" spacing={4}>
                        <div className="container mb-5 mt-5">
                            <div className="row">
                        {
                            products.map(product => (
                                    <div key={product._id} className="col-md-4" >
                                        <div className="card1 mt-3">
                                            <div className="product1 align-items-center p-2 text-center">
                                                <img src={product.image} alt="" className="rounded image1"/>
                                                <h5>{product.name}</h5>
                                                <div className="mt-3 info">
                                                    <span className="text1 d-block">{product.description}</span>
                                                </div>
                                                <span className="info d-block mt-3">Stock: {product.stock}</span> 
                                                <div className="cost mt-3 text-dark">
                                                    <span>${product.price}.00</span>
                                                    <div className="star mt-3 align-items-center">
                                                        <StarIcon/>
                                                        <StarIcon/>
                                                        <StarIcon/>
                                                        
                                                    </div>
                                                </div>
                                            </div> 
                                            <Button  
                                                href={'/products/'+product.id_product} 
                                                size="small" 
                                                fullWidth 
                                                className={classes.juanito} 
                                                variant="contained">
                                            Details
                                            </Button>
                                            <Button  
                                                href={'/products/'+product.id_product} 
                                                size="small" 
                                                fullWidth
                                                className={classes.juanito2}
                                                variant="contained">
                                            Add to cart
                                            </Button>
                                        </div> 

                                    </div>
                                    
                                ))
                        }
                            </div>
                        </div>
                    </Grid>
                    )}
                </Grid>
                <Grid className={classes.productsMain} item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <Typography variant="h6">Categories of products</Typography>
                        <List component='nav'>
                            <ListItem button onClick={()=> submitCategory('All') }>
                                <AllInclusiveIcon/>
                                <ListItemText primary='All products'/> 
                            </ListItem>
                            <ListItem button onClick={()=> submitCategory('Pharmacy') }>
                                <MedicationIcon/>
                                <ListItemText primary='Pharmacy'/> 
                            </ListItem>
                            <ListItem button onClick={()=> submitCategory('Electronics')}>
                                <DvrIcon/>
                                <ListItemText primary='Electronics'/> 
                            </ListItem>
                            <ListItem button onClick={()=> submitCategory('Books')}>
                                <BookIcon/>
                                <ListItemText primary='Books'/> 
                            </ListItem>
                        </List>
                    </Paper>
                </Grid>
              </Grid>
            </Container>
          </Grow>
            
        </Container>
        
    );
};


export default Products;
