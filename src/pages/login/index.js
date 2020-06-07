import React,{PureComponent} from 'react';
//Redirect
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

import {actionCreators} from './store';

import {
    LoginGlobalStyle,
    LoginWrapper,
    Input,
    Button
} from './style';

class Login extends PureComponent{
    render(){
        const {loginState} = this.props;
        if(loginState){
            // 已经登录 直接跳到首页
            return <Redirect to="/" />;
        }else{
            return (
                <div>
                    <LoginGlobalStyle />
                    <LoginWrapper>
                        <Input placeholder="请输入用户名" ref={(input)=>{this.account=input}} />
                        <Input placeholder="请输入密码" type="password" ref={(input)=>{this.password=input}} />
                        <Button onClick={()=>{
                            this.props.login(this.account,this.password)
                        }}>登录</Button>
                    </LoginWrapper>
                </div>
            );
        }
        
    }
}

const mapState=(state)=>({
    // 名字不能和 mapDispatch 里面的 login 重复
    loginState:state.getIn(['login','login'])
});

const mapDispatch=(dispatch)=>{
    return {
        login(accountElem,passwordElem){
            const action=actionCreators.login(accountElem.value,passwordElem.value);
            dispatch(action);
        }
    }
};

//export default Login;
export default connect(mapState,mapDispatch)(Login);