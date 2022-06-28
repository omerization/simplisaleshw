import { GET_USER_INFO } from '../constants/actionTypes';


export default (userInfo = null, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return action.payload;
    default:
      return userInfo;
  }
};