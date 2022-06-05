import React, {useState, useEffect} from 'react';
import { TextField, Button, Paper, Container, Typography, Grow, Grid, makeStyles} from '@material-ui/core';
import FileBase from 'react-file-base64';
import { Divider, Autocomplete, Alert } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import {ToastContainer, toast} from 'react-toastify';
//styles
import useStyles from './styles';

import {useDispatch, useSelector} from 'react-redux';

import {createUser} from '../../../redux/usersDucks'



const SignUp = () => {
    const navigate= useNavigate();
    const classes = useStyles();
    const dispatch = useDispatch();
    var varError = [];
    
    const generateError = (err) => toast.error(err, {
        position:"bottom-right",
    })

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        phone: '',
        userType: null

    });
    //console.log(user);    
    const [options, setOptions] = useState([]);


    const handleSubmit = (e) =>{
        e.preventDefault();
        //const result = words.filter(word => word!=="elite");
        if(user.name.length===0){
            varError.push("Name required");
            generateError("Name required");
        }else if(user.email.length===0){
            varError.push("Email required");
            generateError("Email required");
        } else if(user.password.length===0 ){
            varError.push("password required");
            generateError("password required required");
        }else if(user.password!==user.confirm_password){
            varError.push("password does not match ");
            generateError("password does not match ");
        }else if(user.phone.length < 10){
            varError.push("phone required");
            generateError("phone required");
        }else if(user.userType===null){
            varError.push("userType required");
            generateError("userType required");
        }



        console.log(varError);
        if(varError.length ===0){
            console.log(user);
            dispatch(createUser(user))
            navigate('/signin');
        }
    }

    const clear = () =>{
        setUser({
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            phone: '',
            userType: null
        });
    }
    
    
    useEffect(()=>{
        getData();
    }, [])

    const getData = async ()=> {
        const data = await fetch('http://localhost:3001/users/types');
        const types = await data.json();
        setOptions(types);
    }
    var options_combo2;
    if (options.length !== 0 ) {
        options_combo2 = options.map(item => ({
            id: item._id,
            label: item.type,
        }))
    }
    else {
        options_combo2 = ['admin', 'customer'];
    }
    
    return (
        
        <Container>
          <Grid className={classes.mainContainer} container justifyContent="space-between" alignItems="center" spacing={3}>
            <Grid item xs={12} sm={8}  >
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h4">User Register</Typography>
                        <TextField required name="name" variant="standard" label="Name" fullWidth value={user.name} onChange={(e) => setUser({...user, name:e.target.value})}></TextField>
                        <TextField required name="email" variant="standard" label="Email" fullWidth value={user.email} onChange={(e) => setUser({...user, email:e.target.value})}></TextField>
                        <TextField required name="password" variant="standard" type="password" label="Password" fullWidth value={user.password} onChange={(e) => setUser({...user, password:e.target.value})}></TextField>
                        <TextField required name="confirm_password" variant="standard" type="password" label="Confirm your password" fullWidth  value={user.confirm_password} onChange={(e) => setUser({...user, confirm_password:e.target.value})}></TextField>
                        <TextField required name="phone" variant="standard" label="Phone" fullWidth value={user.phone} onChange={(e) => setUser({...user, phone:e.target.value})}></TextField>
                        <Autocomplete 
                            name="userType" 
                            required
                            options={options_combo2} 
                            fullWidth 
                            isOptionEqualToValue={(option, value) => option.label === value.label}
                            renderInput={(params) => <TextField {...params} label="User Type" />} 
                            value={user.userType}
                            onChange={(e:any, newValue: string | null) => setUser({...user, userType:newValue})}
                        />
                        <Divider/>
                        <Typography variant="body2" color="secondary">*Every field is required*</Typography>
                
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Continue</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                    </form>
                    <Divider/>
                
                <Divider/>
                <Typography variant="body2">Already Have An Account? <a href="/signin">Continue here</a></Typography>
                
                </Paper>

                
            </Grid>
          </Grid>
          <ToastContainer/>
        </Container>
            
        
        
    );
};

export default SignUp;


