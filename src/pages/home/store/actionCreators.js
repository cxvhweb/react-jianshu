import * as actionTypes from './constants';
import {fromJS} from 'immutable';
import axios from 'axios';
const changWriteListData=(data)=>({
    type:actionTypes.CHANGE_WRITE_LIST,
    //data
    //./reducer.js 有用到 list data, fromJS 把 list 转成了 immutable 的数组，所以在这里也转下，不然会报错
    data:fromJS(data),
    totalPage:Math.ceil(data.length/6)
});
export const changePage=(page)=>({
    type:actionTypes.CHANGE_PAGE,
    page
});
// 异步拆分完整示例
export const getWriteList=()=>{
    return (dispatch)=>{
        axios.get('/api/writelist.json')
            .then(
                ({data:{data}})=>{
                const action=changWriteListData(data);
                dispatch(action);
            })
            .catch(err=>{
                console.log(err)
            })
    }
}
// 异步 action 没有单独拿出去
export const getMoreList=(page)=>{
    return (dispatch)=>{
        axios.get('/api/homelist.json?page='+page)
            .then(({data:{articleList}})=>{
                const action={
                    type:actionTypes.GET_HOME_MORELIST,
                    page:page+1,
                    articleList:fromJS(articleList) //下面方法不可以，直接转成 immutable 数组 [{},{},{}]------(外层 [] 转了， {} 没转)
//                  articleList:List(data)
                };
                dispatch(action);
            })
    }
}

export const toggleTopShow=(isShow)=>{
    return (dispatch)=>{
        const action={
            type:actionTypes.TOGGLE_TOP_SCROLL,
            show:isShow
        }
        dispatch(action);
    }
}
