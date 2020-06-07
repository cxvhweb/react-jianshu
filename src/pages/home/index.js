import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {fromJS} from 'immutable';

import {actionCreators} from './store';

import Banner from '../../static/banner.jpg';
import List from './component/List';
import Recommend from './component/Recommend';
import Topic from './component/Topic';
import Writer from './component/Writer';
import axios from 'axios';

import {
    BackTop
} from './style';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';
//class Home extends Component{
class Home extends PureComponent{
    // PureComponent 提升性能，当前组件数据没有发生改变，则不 重新 渲染组件
    handleScrollTop(){
        window.scrollTo(0,0);
    }
    render(){
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img alt="" className="banner-img" src={Banner} />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll?<BackTop onClick={this.handleScrollTop}>返回<br />顶部</BackTop>:null
                }
                
            </HomeWrapper>
        )
    }
    // 挂载完毕
    componentDidMount(){
        axios.get('/api/home.json')
            .then(
                ({data:{data:{writeList,articleList,topicList}}})=>{
                    var action={
                        type:'change_home_data',
                        totalPage:Math.ceil(writeList.length/6),
                        writeList:fromJS(writeList),
                        articleList:fromJS(articleList),
                        topicList:fromJS(topicList)
                    };
                    // fromJS 把数据转成 immutable 的数组类型
                    this.props.homeGetList(action);
            })
            .catch(err=>{
                console.log(err)
            });
        this.bindEvents();
        //
    }
    componentWillUnmount(){
        // 组件销毁，移除 window 全局监听事件
        window.removeEventListener('scroll',this.props.changeScrollTopShow);
    }
    bindEvents(){
        window.addEventListener('scroll',this.props.changeScrollTopShow);
    }
}
const mapState=(state)=>({
    showScroll:state.getIn(['home','showScroll'])
})
const mapDispatch=(dispatch)=>{
    return {
        homeGetList(action){
            dispatch(action)
        },
        changeScrollTopShow(e){
            let action=null;
            if(document.documentElement.scrollTop > 100){
                action=actionCreators.toggleTopShow(true);
            }else{
                action=actionCreators.toggleTopShow(false);
            }
            dispatch(action)
        }
    }
};

//export default Home;
//export default connect(null,mapDispatch)(Home);
export default connect(mapState,mapDispatch)(Home);