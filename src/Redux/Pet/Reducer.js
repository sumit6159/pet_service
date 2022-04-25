import { UPLOADPET } from './Action'
const initialState = {
    pet : {},
    status : false,
}
export const petReducer = (store = initialState, {type , payload}) => {
    switch (type){
        case UPLOADPET : 
            return {...store, pet : payload, status : true}
        default:
            return store;
    }
}