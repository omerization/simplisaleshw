import * as api from '../api/index';
import * as mobileAPI from '../api/mobile';
import { GET_USER_INFO } from 'constants/actionTypes';

export const signin = (formData, router) => async (dispatch) => {
  try {

    const { data } = await api.signIn(formData);

    dispatch({ type: 'SIGN_IN', payload: data });

    localStorage.setItem('usId', JSON.stringify({ ...data }));

    router('/');
  } catch (error) {
    console.log(error);
  }
};

export const signout = (router) => async (dispatch) => {
  try {

    dispatch({ type: 'SIGN_OUT' });

    localStorage.removeItem('usId');

    router('/login');
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = (userToken) => async (dispatch) => {
  try {

    const userInfo  = await mobileAPI.getUserInfo(userToken);

    dispatch({ type: GET_USER_INFO, payload: userInfo.user });

  } catch (error) {
    console.log(error);
  }
};



