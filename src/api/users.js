import axios from 'axios';

const url= 'http://localhost:3001/users';

const credentials = {withCredentials:true,}

export const getUsers = () => axios.get(url)

export const getUserById = (id) => axios.get(`${url}/id/${id}`);

export const createUser = (newUser) => axios.post(url, newUser, credentials);


// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

// export const deletePost = (id) => axios.delete(`${url}/${id}`);

// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);





