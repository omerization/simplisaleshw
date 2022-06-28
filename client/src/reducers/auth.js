import { SIGN_IN,  SIGN_OUT} from '../constants/actionTypes';


export default  (authData =  JSON.parse(localStorage.getItem('usId')), action) => {
    switch (action.type) {
        case SIGN_IN:
            return action.payload;
        case SIGN_OUT:
            return null;
        default:
            return authData;
    }
};