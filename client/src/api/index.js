import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5000'});

export const fetchUsers = () => API.get('/users');
export const createUsers = (newUser) => API.post('/users', newUser);
export const updateUsers = (id, updateUsers) => API.patch(`/users/${id}`, updateUsers);
export const deleteUsers = (id) => API.delete(`/users/${id}`);

