import { GET_USER_RESTAURANTS } from 'constants/actionTypes';
import * as api from '../api/index';
import * as mobileAPI from '../api/mobile';

export const getRestaurants = (userToken) => async (dispatch) => {
  try {

    const  restaurantData  = await mobileAPI.getRestaurants(userToken);

    dispatch({ type: GET_USER_RESTAURANTS, payload: restaurantData.restaurants });

  } catch (error) {
    console.log(error);
  }
};




