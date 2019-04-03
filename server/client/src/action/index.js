import axios from 'axios';
import { FETCH_USER } from './types'; 

const fetchUser = () => {
  axios.get('/api/currnt_user');
};


const booksLoaded = (newBooks) => {
  return {
    type: 'BOOKS_LOADED',
    payload: newBooks
  }
}

export {
  booksLoaded
};