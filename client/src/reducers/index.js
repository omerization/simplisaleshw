import { combineReducers } from 'redux';


import auth from './auth';
import restaurants from './restaurants';
import pastOrders from './pastOrders';
import userInfo from './user';



export const reducers = combineReducers({
    auth,
    restaurants,
    pastOrders,
    userInfo
});

