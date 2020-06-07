import {fromJS} from 'immutable';
import * as actionTypes from './constants';
const defaultState=fromJS({});
export default (state=defaultState,action)=>{
    switch(action.type){
        case actionTypes.SET_DETAIL:
            return state.merge({
                title:action.title,
                content:action.content
            });
        default:
            return state;
    }
}