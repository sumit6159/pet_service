import { combineReducers, createStore, applyMiddleware} from 'redux';
import { dataReducer } from "./Data/Reducer";
import {loginReducer} from './Login/Reducer'
import ReduxThunk from 'redux-thunk';
import { petReducer } from './Pet/Reducer';
import { addressReducer } from './Address/Reducer';
const rootReducer = combineReducers({
    details : dataReducer, 
    login : loginReducer, 
    pet : petReducer,
    address : addressReducer,
});

export const store = createStore(
    rootReducer,
    applyMiddleware(ReduxThunk)
)

