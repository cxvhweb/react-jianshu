import axios from 'axios';
import * as actionTypes from './constants';

const setDetail=(title,content)=>({
    type:actionTypes.SET_DETAIL,
    title,
    content
})
export const getDetail=(id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json?id='+id)
            .then(({data:{data:{title,content}}})=>{
                const action=setDetail(title,content);
                dispatch(action);
            })
            .catch(err=>{
                console.log(err)
            });
    }
}