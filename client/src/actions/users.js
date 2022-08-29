import { FETCH_ALL, CREATE, UPDATE, DELETE } from "../constants/actionTypes";
import * as api from '../api';

export const getUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers();

        dispatch({ type: FETCH_ALL, payload: data});
    } catch (error) {
        console.log(error.message);
    }

}

export const createUsers = (user) => async (dispatch) => {
    try {
        const { data } = await api.createUsers(user);
        dispatch({ type: CREATE, payload:data});
    } catch (error) {
        console.log(error);
    }
}

export const updateUsers = (id, users) => async (dispatch) =>{
    try {
        const {data} = await api.updateUsers(id, users);

        dispatch({ type: UPDATE, payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const deleteUsers = (id) => async (dispatch) => {
    try {
        await api.deleteUsers(id);

        dispatch({ type: DELETE, payload: id});
    } catch (error) {
        console.log(error);
    }
}