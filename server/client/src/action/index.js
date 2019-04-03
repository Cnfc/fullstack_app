import axios from 'axios';
import { FETCH_USER, FETCH_SURVEYS } from './types';


const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');

  dispatch({ type: FETCH_USER, payload: res });
};

export {
  fetchUser
};