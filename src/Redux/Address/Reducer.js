import { GETADDRESS, POSTDATA, SETLOADING } from './Action'
const initialState = {
    address : [],
    loading : false, 
    postAddress : {},
    post : false,
}
export const addressReducer = (store = initialState, {type , payload})=>{
    switch (type) {
        case POSTDATA : 
            return {...store, postAddress : payload , loading : false, post : true}
        case GETADDRESS : 
            return {...store, address : payload, loading : false}
        case SETLOADING : 
            return {...store, loading : payload}
        default :
            return store
    }
}