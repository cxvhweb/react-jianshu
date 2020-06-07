import * as actionTypes from './constants';
import {fromJS} from 'immutable';
/*
mutable 易变的
immutable 一成不变的
immutable 对象 ，不可以改变的对象
*/
const defaultStore=fromJS({
    focused:false,
    mouseIn:false,
    list:[],
    page:1,
    totalPage:1
});
// fromJS 把 list 转成了 immutable 的数组
export default (state=defaultStore,action)=>{
    /*
    if(action.type===actionTypes.SEARCH_FOCUS){
        // immutable 对象的 set 方法，会结合之前 immutable 对象的值
        // 和设置的值，返回一个全新的对象，不会改变 state 的值
        // 优点：防止一不小心把 state 改变了
        
        // return {
        //     focused:true
        // };
        
       return state.set('focused',true);
    }
    if(action.type===actionTypes.SEARCH_BLUR){
        // return {
        //     focused:false
        // };
        return state.set('focused',false);
    }
    if(action.type===actionTypes.CHANGE_HOTKEY_LIST){
        return state.set('list',action.data);
    }
    */
    switch(action.type){
        case actionTypes.SEARCH_FOCUS:
            return state.set('focused',true);
        case actionTypes.SEARCH_BLUR:
            return state.set('focused',false);
        case actionTypes.CHANGE_HOTKEY_LIST:
            //return state.set('list',action.data).set('totalPage',action.totalPage);
            //另一种写法性能高
            return state.merge({
                list:action.data,
                totalPage:action.totalPage
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn',true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn',false);
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        default:
            return state;
    }
}