import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';


export const fetchUser = () => async dispatch => {
  const res = await axios.get('http://localhost:5000/api/current_user');
  console.log(res, '+++++++=');

  dispatch({ type: FETCH_USER, payload: res });
};
