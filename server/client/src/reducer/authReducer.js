export default (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case 'LOGGED_IN':
      return {

      }
    default: 
      return state;
  }
};