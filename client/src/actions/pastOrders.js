import { GET_PAST_ORDERS } from 'constants/actionTypes';
import * as api from '../api/index';
import * as mobileAPI from '../api/mobile';

export const getPastOrders = (userToken) => async (dispatch) => {
  try {

    const  pastOrdersData  = await mobileAPI.getPastOrders(userToken);

 

    dispatch({ type: GET_PAST_ORDERS, payload: pastOrdersData.pastOrders });

  } catch (error) {
    console.log(error);
  }
};




