import {GETDETAILS, SETLOADING, POSTDATA} from './Action'
const initialState = {
    addressDetails : {},
    loading : false,
    currentData : {},
}
export const dataReducer = (store = initialState, {type, payload}) =>{
    switch(type){
        case POSTDATA :
            return {...store, currentData : payload}
        case SETLOADING : 
            return {...store, loading : payload}
        case GETDETAILS:
        return {...store, addressDetails : payload, loading : false}
        default:
            return store
    }
}