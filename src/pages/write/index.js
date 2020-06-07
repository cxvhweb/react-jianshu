import React,{PureComponent} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    DetailGlobalStyle,
    DetailWrapper,
    Header,
    Content
} from './style';

class Write extends PureComponent{
    render(){
        const {loginState} = this.props;
        if(loginState){
            return (
                <div>
                    <DetailGlobalStyle />
                    <DetailWrapper>
                        <Header>简书项目技术栈做个总结</Header>
                        <Content>
                            <p><strong>axios：</strong>数据请求使用</p>
                            <p><strong>react-loadable：</strong>异步组件，访问 登录，加载 登录 JS ,访问详情，加载详情 JS，提升性能</p>
                            <p><strong>react-transition-group：</strong>动画组件</p>
                            <p><strong>immutable：</strong>管理store中的数据</p>
                            <p><strong>redux-immutable：</strong>redux-immutable 统一数据格式</p>
                            <p><strong>react-redux：</strong>React-Redux 进行应用数据的管理</p>
                            <p><strong>redux-thunk：</strong>Redux的中间件,Redux-thunk 对 dispatch 进行了封装升级</p>
                        </Content>
                    </DetailWrapper>
                </div>
            );
        }else{
            // 未登录，跳到登录页面
            return <Redirect to="/login" />;
        }
    }
}

const mapState=(state)=>({
    // 名字不能和 mapDispatch 里面的 login 重复
    loginState:state.getIn(['login','login'])
});


//export default Write;
export default connect(mapState,null)(Write);


