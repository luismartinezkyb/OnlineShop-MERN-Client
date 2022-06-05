import React, { PropTypes, useEffect, useState } from 'react';
import {useCookies} from 'react-cookie';
import axios from 'axios';
import {ToastContainer, toast} from 'react-toastify'
import {useNavigate, Link} from 'react-router-dom';
import Home from '../../menu/Home';

const Secret = () => {
	const navigate = useNavigate();
	const [userNew, setUserNew] = useState({user:''});
	const [cookies, setCookie, removeCookie] = useCookies([]);

	useEffect(()=>{
		
		const verifyUser = async ()=>{
			
			if (!cookies.jwt){
				navigate('/signin');
			}
			else{
				const {data} = await axios.post("http://localhost:3001/users/check", 
					{}, 
				{withCredentials:true});
				
				if(!data.status){
					removeCookie('jwt');
					navigate('/signin');
				}else{
					//mandar a app con props.user
					setUserNew({user:data.user})
					
					toast(`Hi ${data.user}`, {theme:'dark'});
				}
			}
		};
		verifyUser();
	},[cookies, navigate, removeCookie])

	const logOut = () =>{
		removeCookie('jwt');
		navigate('/signin')
	}
    return (
        <div>
        	<Home/>
        	<button onClick={logOut}>logOut </button>
        	<ToastContainer/>
        </div>
    );
};


export default Secret;
