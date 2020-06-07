import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';

// 没必要暴漏出去的，可以放在上面，或者放在下面，看着整齐好看
const changeHotkeyList=(data)=>({
    type:actionTypes.CHANGE_HOTKEY_LIST,
    //data
    //./reducer.js 有用到 list data, fromJS 把 list 转成了 immutable 的数组，所以在这里也转下，不然会报错
    data:fromJS(data),
    totalPage:Math.ceil(data.length/6)
});

//()=>({type:'search_focus'})   调用 searchFocus() 结果是 {type:'search_focus'}
export const searchFocus=()=>({
    type:actionTypes.SEARCH_FOCUS
});
export const searchBlur=()=>({
    type:actionTypes.SEARCH_BLUR
});
export const mouseEnter=()=>({
    type:actionTypes.MOUSE_ENTER
});
export const mouseLeave=()=>({
    type:actionTypes.MOUSE_LEAVE
});
export const changePage=(page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
});


export const getHotList=()=>{
    return (dispatch)=>{
        axios.get('/api/hotkeylist.json')
            .then(({data:{data}})=>{
                // const action={
                //     type:"change_hotkey_list",
                //     data:data
                // };// 写到上面用
                const action=changeHotkeyList(data);
                dispatch(action);
            })
            .catch(res=>{
                console.log(res);
            });
    }
};
