import { GET_PAST_ORDERS} from '../constants/actionTypes';


export default (pastOrders = [], action) => {
  switch (action.type) {
    case GET_PAST_ORDERS:
      return action.payload;
    default:
      return pastOrders;
  }
};