import * as api from '../api/users';


//TYPES 

const FETCH_ALL_USER = 'FETCH_ALL_USER';
const FETCH_ONE_USER = 'FETCH_ONE_USER';
const CREATE_ONE_USER = 'CREATE_ONE_USER';
//const UPDATE_ONE_USER= 'UPDATE_ONE_USER';

//REDUCER
export default function userReducer(users = [], action){
	switch (action.type) {
		case FETCH_ALL_USER:
			return action.payload;
		case FETCH_ONE_USER:
			return action.payload;
		case CREATE_ONE_USER:
			return [...users, action.payload];
		default:
			return users;
	}
		
}

//ACTIONS
export const getUsers = () =>  async (dispatch) =>{
	try {
		const {data} = await api.getUsers();
		
		dispatch({
			type: FETCH_ALL_USER, 
			payload:data
		});
	} catch(e) {
		// statements
		console.log(e.message);
	}
}

export const getUserById = (id) => async (dispatch) =>{
	try {
		const { data } = await api.getUserById(id);
		dispatch({
			type: FETCH_ONE_USER,
			payload: data
		})
	} catch(e) {

		console.log(e.message);
	}
}

export const createUser = (user) => async (dispatch) => {

	try {
		const { data } = await api.createUser(user);
		dispatch({
			type:CREATE_ONE_USER,
			payload: data
		})
	} catch(e) {
		// statements
		console.log(e);
	}

}



