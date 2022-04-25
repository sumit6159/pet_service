import axios from "axios";

const LOGGED = 'LOGGED'; 
const LOGOUT = 'LOGOUT'; 
const ERROR = 'ERROR';
const logOut = ()=>({type : LOGOUT})
const userLog = (value) => ({type : LOGGED, payload : value})
const error = ()=>({type : ERROR})
const apiCallLoggedIn = (data) =>{
    return async function(dispatch){
        try {
            let data2 = await axios.post('https://pet-service-app.herokuapp.com/user/login', data);
            if(data2.data){
                localStorage.setItem('userData', JSON.stringify(data2.data))
                dispatch(userLog(data2.data))
            } else {
                dispatch(error())
            }
        }
        catch (err) {
                dispatch(error())
        }
    }
}
const apiCallLoggedOut = () =>{
    return async function(dispatch){
        try {
            
            window.localStorage.removeItem('userData');
            dispatch(logOut())
        }
        catch(err) {

        }
    }
}
export {
    apiCallLoggedOut,logOut, LOGOUT,
    LOGGED, userLog, apiCallLoggedIn,
    ERROR, error
}