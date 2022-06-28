import { GET_USER_RESTAURANTS } from '../constants/actionTypes';


export default (restaurants = [], action) => {
  switch (action.type) {
    case GET_USER_RESTAURANTS:
      return action.payload;
    default:
      return restaurants;
  }
};