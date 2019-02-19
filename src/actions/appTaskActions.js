import axios from 'axios';
import { GET_ERRORS } from "../actions/types";
// ()

export const addAppTask = (appTask, history) => async dispatch => {
   try {
       await axios.post("http://localhost:8080/api/board", appTask);
       history.push('/');

       dispatch({
           type: GET_ERRORS,
           payload: {}
       })
   } catch (error) {
       dispatch({
           type: GET_ERRORS,
           payload: error.response.data
       })
   }
};
