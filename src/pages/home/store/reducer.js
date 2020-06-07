import {fromJS} from 'immutable';
import * as actionTypes from './constants';
const defaultState=fromJS({
    topicList:[],
    articleList:[],
    articlePage:1,
    boardList:[{
        id:1,
        url:'/#1',
        imgUrl:'/img/board-01.png'
    },{
        id:2,
        url:'/#2',
        imgUrl:'/img/board-02.png'
    },{
        id:3,
        url:'/#3',
        imgUrl:'/img/board-03.png'
    },{
        id:4,
        url:'/#4',
        imgUrl:'/img/board-04.png'
    }],
    writeList:[],
    page:1,totalPage:1,
    showScroll:false
});
export default (state=defaultState,action)=>{
    switch(action.type){
        case 'change_home_data':
            return state.merge({
                articleList:action.articleList,
                topicList:action.topicList,
                writeList:action.writeList,
                totalPage:action.totalPage
            });
        case actionTypes.CHANGE_WRITE_LIST:
            return state.merge({
                writeList:action.data,
                totalPage:action.totalPage
            });
        case actionTypes.CHANGE_PAGE:
            return state.set('page',action.page);
        case actionTypes.GET_HOME_MORELIST:
            // immutable 数组 追加
            //state.get('articleList').concat(action.articleList)
            //return state.set('articleList',state.get('articleList').concat(action.articleList));
            return state.merge({
                articleList:state.get('articleList').concat(action.articleList),
                articlePage:action.page
            });
        case actionTypes.TOGGLE_TOP_SCROLL:
            return state.set('showScroll',action.show);
        default:
            return state;
    }
}

