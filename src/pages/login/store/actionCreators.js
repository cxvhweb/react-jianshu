import * as actionTypes from './actionTypes';
import axios from 'axios';
const changeLogin=(data)=>({
    type:actionTypes.CHANGE_LOGIN,
    data
})
export const logout=()=>{
    return (dispatch)=>{
        const action=changeLogin({data:{login:false}})
        dispatch(action);
    }
};
export const login=(acction,password)=>{
    return (dispatch)=>{
        axios.get('/api/login.json?acction='+acction+'&password='+password)
            .then(({data:{data}})=>{
                // const action={
                //     type:actionTypes.CHANGE_LOGIN,
                //     data
                // };// action 提取出来
                const action=changeLogin(data);
                dispatch(action);
            })
            .catch(err=>{
                console.log(err)
            });
    }
}