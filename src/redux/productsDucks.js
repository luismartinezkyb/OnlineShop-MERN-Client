import * as api from '../api/products';


//TYPES 

const FETCH_ALL = 'FETCH_ALL';
const FETCH_ALL_BY_CATEGORY = 'FETCH_ALL_BY_CATEGORY';
const FETCH_ONE = 'FETCH_ONE';
//const LIKE = 'LIKE';

//REDUCER
export default function productReducer(products = [], action){
	switch (action.type) {
		case FETCH_ALL:
			return action.payload;
		case FETCH_ONE:
			return action.payload;
		case FETCH_ALL_BY_CATEGORY:
			return action.payload;
		default:
			return products;
	}
		
}

//ACTIONS
export const getProducts = () =>  async (dispatch) =>{
	try {
		const {data} = await api.getProducts();
		
		dispatch({
			type: FETCH_ALL, 
			payload:data
		});
	} catch(e) {
		// statements
		console.log(e.message);
	}
}
export const getOneProduct = (id) => async (dispatch) =>{
	try {
		const { data } = await api.getOneProduct(id);
		dispatch({
			type: FETCH_ONE,
			payload: data
		})
	} catch(e) {

		console.log(e.message);
	}
}

export const getProductsByCategory = (category) => async(dispatch) =>{
	try {
		const { data } = await api.getProductsByCategory(category);
		dispatch({
			type: FETCH_ALL_BY_CATEGORY,
			payload: data
		})
	} catch(e) {
		// statements
		console.log(e);
	}

}



