import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const defaultState=fromJS({
    login:true||false
});

export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.CHANGE_LOGIN:
            return state.set('login',action.data.login);
        default:
            return state;
    }
}