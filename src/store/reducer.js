/*
// const defaultStore={
//     focused:false
// };
// export default (state=defaultStore,action)=>{
//     if(action.type==='search_focus'){
//         return {
//             focused:true
//         };
//     }
//     if(action.type==='search_blur'){
//         return {
//             focused:false
//         };
//     }
//     return state;
// }
//拆分 reducer，原有reducer复制出去
*/
//import { combineReducers } from 'redux';
import { combineReducers } from 'redux-immutable';
//import headerReducer from '../common/header/store/reducer';//也可以用下面这种引入方式
import {reducer as headerReducer} from '../common/header/store';//reducer as headerReducer,reducer 别名为 headerReducer
//import homeReducer from '../pages/home/store/reducer';
import {reducer as homeReducer} from '../pages/home/store';
//详情 reducer
import {reducer as detailReducer} from '../pages/detail/store';
//登录 reducer
import {reducer as loginReducer} from '../pages/login/store';


const reducer = combineReducers({
    header:headerReducer,
    home:homeReducer,
    detail:detailReducer,
    login:loginReducer
});
export default reducer;