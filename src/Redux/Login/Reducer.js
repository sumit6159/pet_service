import {LOGGED, ERROR ,LOGOUT} from './Action'
const dataUser = JSON.parse(localStorage.getItem('userData')) || {
    token : null
};
const initialState = {
    loggedIn: dataUser.token !== null ? true : false || false,
    loginData : dataUser.user || {},
    status :  false,
    auth : 'Permission denied',
    error : false
}
// Permission denied
// admin => Permission granted for all
// house-holder => Permission granted for add house
// user => Permission granted to add pet
export const loginReducer = (store = initialState, {type, payload})=>{
    switch (type) {
        case LOGOUT : 
            return {...store, loggedIn : false, loginData : {}, status : false, auth : 'Permission denied' }
        case LOGGED : 
        return {...store, status : false, error : false, loginData : payload.user, auth : payload.authorize, loggedIn : true}
        case ERROR : 
        return {...store , loggedIn : false, error  : true, status : true}
        default:
            return store;
    }
}