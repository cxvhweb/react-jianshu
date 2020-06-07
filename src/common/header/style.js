import styled from 'styled-components';
import logoPic from '../../static/logo.png'
// 局部样式
export const HeaderBox=styled.div`
height:58px;
background-color: #fff;
border-bottom:1px solid #f0f0f0;
`;
export const HeaderWrapper=styled.div`
    height: 100%;
    border-width: 0 0 1px;
    background-color: #fff;
    border-color: #f0f0f0;
    position: relative;
    max-width: 1440px;
    margin: auto;
`;
//export const Logo = styled.a.attrs({
//    href:'/'
//})`
export const Logo=styled.div`
    height:58px;
    width:104px;
    position:absolute;
    top:0;
    left:0;
    background-image:url(${logoPic});background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: 0 0;
`;
export const Container=styled.div`
    width:960px;
    height:100%;
    margin:auto;
`;
export const NavItem=styled.a.attrs({
    "href":"/write"
})`
    display:block;
    text-decoration:none;
    line-height:58px;
    padding:0 15px;
    transition: background .3s ease;
    font-size:17px;
    color:#333333;
    &.left{
        float:left;
    }
    &.right{
        float:right;
    }
    &:hover{
        background:#f5f5f5;
    }
    &.active{
        color:#ea6f5a;
        background:transparent;
    }
    &.icon-aa{
        font-size:17px;
    }
`;
export const NavSearchWrap=styled.div`
    position:relative;
    top:9px;
    float: left;

    .search-icon{
        position:absolute;
        top:5px;
        right:5px;
        width:30px;
        height:30px;
        text-align:center;
        line-height:30px;
        border-radius:50%;
        background-color:transparent;
        z-index:66;
        font-size:26px;
        color:#969696;
        &.focused{
            background-color: #969696;
            color: #ffffff
        }
    }
`;
/*
transition: all .3s ease;
*/
export const NavSearch=styled.input.attrs({
    placeholder:'搜索'
})`
    position:relative;
    z-index:6;
    display:block;
    padding: 0 40px 0 20px;
    width: 160px;
    width:240px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    outline:none;
    box-sizing: border-box;
    &::placeholder{
        color:#999999;
    }
    &.focused{
        width:320px;
    }
    &.slide-enter{
        transition: all .2s ease-out;
        width:240px;
    }
    &.slide-enter-active{
        width:320px;
    }
    &.slide-exit{
        transition: all .2s ease-out;
        width:320px;
    }
    &.slide-exit-active{
        width:240px;
    }
`;
/*
transition: width .5s;
-moz-transition: width .5s;
-webkit-transition: width .5s;
-o-transition: width .5s;
transition-delay: .1s;
-moz-transition-delay: .1s;
-webkit-transition-delay: .1s;
-o-transition-delay: .1s;
使用组件实现，这些注释掉
&:focus{
        width:320px;
    }
&:focus+.iconfont{
    background-color: #969696;
    color: #ffffff
}
*/


export const NavHotSearch=styled.div`
position: absolute;
top: 50px;
left: 0;
width: 320px;
overflow: hidden;
background: white;
box-shadow: 0 0 6px 0px #e0e0e0;
padding: 5px 10px 15px;
box-sizing: border-box;
margin-top: -5px;
`;
export const NavHotSearchTitle=styled.div`
    font-size:14px;
    height:30px;
    line-height:30px;
    overflow: hidden;
`;
export const ChangeNavHotKey=styled.a`
display:block;
    font-size:13px;
    line-height:30px;
    float:right;
    color:#999999;
    height:50px;
    overflow:hidden;
    cursor:pointer;
    
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &:hover{
    }
    .iconfont{
        font-size:12px;
        margin-right:2px;
        display: block;
        transition:all .2s ease-in;
        transform-origin:center center;
        position:relative;
        top:1px;
        float:left;
    }
`;
export const NavHotSearchList=styled.div`
    overflow:hidden;
`;
export const NavHotSearchListItem=styled.div`
    height: 22px;
    padding: 5px 6px 0 0;
    float: left;
    position:relative;
    transition: all .3s ease;
`;
export const NavSearchHotKeyWorld=styled.a.attrs({
    href:'/write'
})`
display: block;
font-size: 12px;
line-height: 20px;
color:#333333;
text-decoration:none;
padding: 0 6px;
border:1px solid #c3c0c0;
border-radius: 5px;
&:hover{
    text-decoration:underline;
}
`;
export const Addition=styled.div`
    float: right;
    position: relative;
    z-index: 6;
    overflow: hidden;
`;
export const Button=styled.div`
    position:relative;
    top:;
    float:left;
    display:block;
    font-weight: 400;

    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    background-image: none;
    border: 1px solid transparent;
    white-space: nowrap;
    padding:0 25px;
    font-size: 14px;
    line-height: 1.42857;
    border-radius: 4px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    transition: all .3s ease;
    &.login{
        height:40px;
        margin: 8px 6px 0 10px;
        padding:0;
        a{
            display:block;
            padding:0 25px;
            color:#969696;
            font-size: 15px;
            line-height:40px;
            text-decoration:none;
        }
    }
    &.logins{
        height:40px;
        margin: 8px 6px 0 10px;
        padding:0;
        display:block;
        padding:0 25px;
        color:#969696;
        font-size: 15px;
        line-height:40px;
        text-decoration:none;
    }
    &.register{
        border: 1px solid rgba(236,97,73,.7);
        border-radius: 20px;
        font-size: 15px;
        color: #ea6f5a;
        background-color: transparent;
        margin: 8px 5px 0 15px;
        line-height:38px;
    }
    &.register:hover{
        color: #ec6149;
        border-color: #ec6149;
        background-color: rgba(236,97,73,.05);
    }
    &.write{
        height: 40px;
        line-height: 40px;
        margin: 8px 12px 0;
        border-radius: 20px;
        font-size: 15px;
        color: #fff;
        background-color: #ea6f5a;
    }
    &.write:hover{
        color: #fff;
        background-color: #ec6149
    }
`;