import React, {useState, useEffect} from 'react';
import { Divider, TextField, Button, Paper, Container, Typography, Grow, Grid} from '@material-ui/core';
import axios from 'axios';


import { Navigate, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify'
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';

//import {createPost, updatePost} from '../../actions/posts'

const SignIn = () => {
    const navigate= useNavigate();
    const classes = useStyles();
    
    var varError = [];
    
    const generateError = (err) => toast.error(err, {
        position:"bottom-right",
    })
    
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: ''
    });

    const handleSubmit = async (e) =>{
        e.preventDefault();
        //const result = words.filter(word => word!=="elite");
        try{
            const {data} = await axios.post("http://localhost:3001/users/login", {
                ...userLogin
            },
            {
                withCredentials:true
            });
            if (data){
                if(data.errors){
                    const {email, password} = data.errors;
                    if (email){
                        generateError(email);
                    }
                    else if(password){
                        generateError(password);
                    }
                }
                else{
                    navigate('/secret')
                }
            }
        }
        catch(err){
            console.log(err)
        }
    }

    

    
    
    return (
        
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={8}  >
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h4">User Log In</Typography>
                        <TextField 
                        name="email" 
                        variant="standard" 
                        label="Email" 
                        fullWidth 
                        value={userLogin.email} 
                        onChange={(e) => setUserLogin({...userLogin, email:e.target.value})}></TextField>
                        <TextField 
                        name="password" 
                        variant="standard" 
                        label="Password" 
                        fullWidth 
                        value={userLogin.password} 
                        onChange={(e) => setUserLogin({...userLogin, password:e.target.value})}></TextField>
                        
                        <Button className={classes.buttonSubmit} 
                        variant="contained" 
                        color="primary" 
                        size="large" 
                        type="submit" 
                        fullWidth >Continue</Button>
                        
                    </form>
                    <Typography variant="body2">If you don't have an account please <a href="/signup">Register here</a></Typography>
                </Paper>
                
            </Grid>
          </Grid>
          <ToastContainer/>
        </Container>
            
        
        
    );
};

export default SignIn;


