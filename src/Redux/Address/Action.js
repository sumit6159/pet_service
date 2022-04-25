import axios from "axios";

const SETLOADING = 'SETLOADING';
const POSTDATA = 'POSTDATA';
const GETADDRESS  = 'GETADDRESS';
const setLoading = (data) => ({type : SETLOADING, payload : data});
const postData = (data) => ({type : POSTDATA, payload : data});
const getAddress = (data)=>({type : GETADDRESS, payload : data});
const apiCallAddress = ()=>{
    return async(dispatch)=>{
        try {
            dispatch(setLoading(true));
            const addressD = await axios.get('https://pet-service-app.herokuapp.com/address');
            dispatch(getAddress(addressD.data.Address))
        }
        catch (err) {
            console.log(err);
        }
    }
}
const apiCallPrice = (value)=>{
    return async(dispatch)=>{
        try {
            dispatch(setLoading(true));
            if(value === 'both'){
                const addressD = await axios.get('https://pet-service-app.herokuapp.com/address');
                dispatch(getAddress(addressD.data.Address))
            }
            else if(value !== 'both'){
                const price  = await axios.get(`https://pet-service-app.herokuapp.com/address/sort?sortby=${value}`);
                dispatch(getAddress(price.data.Address))
            }
        }
        catch (err) {

        }
    }
} 
const apiCallVerified = (value)=>{
    return async(dispatch)=>{
        try {
            dispatch(setLoading(true));
            if(value === 'both') {
                const addressD = await axios.get('https://pet-service-app.herokuapp.com/address');
                dispatch(getAddress(addressD.data.Address))
            }
            else if(value !== 'both'){
                const price  = await axios.get(`https://pet-service-app.herokuapp.com/address/sort?sortby=${value}`);
                dispatch(getAddress(price.data.Address))
            }
        }
        catch (err) {
            
        }
    }
} 
const apiCallPost = (data)=>{
    return async (dispatch) =>{
        try {
            dispatch(setLoading(true))
            const res = await axios.post(`https://pet-service-app.herokuapp.com/address`, data)
            console.log(res.data)
            dispatch(postData(res.data))
        }
        catch (err) {
            console.log(err)
        }
    }
}
export {
    GETADDRESS, getAddress, apiCallAddress,
    apiCallPrice, apiCallVerified, SETLOADING,
    apiCallPost, postData, POSTDATA
}