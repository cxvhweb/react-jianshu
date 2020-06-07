import React,{Component} from 'react';//下面改成无状态组件，不需要 Component，删除掉
//import React from 'react';
import {connect} from 'react-redux';
//import * as actionCreators from './store/actionCreators'; //优化后引入方法
import {actionCreators} from './store';
import {actionCreators as loginActionCreators} from '../../pages/login/store';

import {Link} from 'react-router-dom';

import {
    HeaderBox,
    HeaderWrapper,
    Logo,
    Container,
    NavItem,
    NavSearchWrap,
    NavSearch,
    NavHotSearch,
    NavHotSearchTitle,
    ChangeNavHotKey,
    NavHotSearchList,
    NavHotSearchListItem,
    NavSearchHotKeyWorld,
    Addition,
    Button
} from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component{
		NavHotSearchBox(){
			const {focused,mouseIn,list,page,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage}=this.props;
			// immutable 对象转 js 对象，toJS
			const newList = list.toJS(page);
			const pageList=[];
				for(let i=(page-1)*6;i<page*10;i++){
					if(newList[i]){
						pageList.push(
							<NavHotSearchListItem key={newList[i]}><NavSearchHotKeyWorld>{newList[i]}</NavSearchHotKeyWorld></NavHotSearchListItem>
						);
					}
				}
			if(focused||mouseIn){
					return (
							<NavHotSearch
								onMouseEnter={handleMouseEnter}
								onMouseLeave={handleMouseLeave}
							>
									<NavHotSearchTitle><ChangeNavHotKey onClick={
										()=>{
											handleChangePage(page,totalPage,this.spinIcon)
										}
									}><span className="iconfont"
                                    ref={
                                        (icon)=>{this.spinIcon=icon}
                                    }
                                    >&#xe851;</span>换一批</ChangeNavHotKey>热门搜索</NavHotSearchTitle>
									<NavHotSearchList>
										{pageList}
									</NavHotSearchList>
							</NavHotSearch>
					)
			}else{
					return null;
			}
		}
    render(){
			
			const {focused,searchFocus,searchBlur,list,login,logout}=this.props;
        return (
       <HeaderBox>
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Addition>
                    <NavItem className="left iconfont icon-aa">&#xe636;</NavItem>
                    <NavItem className="left">beta</NavItem>
                    {
                        login?
                        <Button className="logins" onClick={logout}>退出</Button>:
                        <Button className="login"><Link to="/login">登录</Link></Button>
                    }
                    
                    <Link to="/write"><Button className="register">注册</Button></Link>
                    <Link to="/write"><Button className="write"><span className="iconfont">&#xe62b;</span>&nbsp;&nbsp;写文章</Button></Link>
                </Addition>
                <Container>
                    <NavItem className="left active">发现</NavItem>
                    <NavItem className="left">关注</NavItem>
                    <NavItem className="left">消息</NavItem>
                    <NavSearchWrap>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <NavSearch
                                className={focused?'focused':''}
                                onFocus={()=>{
                                    searchFocus(list)
                                }}
                                onBlur={searchBlur}
                            />
                        </CSSTransition>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide"
                        >
                            <span className={focused?'iconfont focused search-icon':'iconfont search-icon'}>&#xe682;</span>
                        </CSSTransition>
                        {this.NavHotSearchBox()}
                    </NavSearchWrap>
                </Container>
            </HeaderWrapper>
        </HeaderBox>
        );
    }
};
const mapStateToProps=(state)=>{
    return {
        //focused:state.header.focused
        //immutable
        //focused:state.header.get('focused')
        //redux-immutable
        //focused:state.get('header').get('focused')//还有个写法
        focused:state.getIn(['header','focused']),
        list:state.getIn(['header','list']),
        page:state.getIn(['header','page']),
        totalPage:state.getIn(['header','totalPage']),
        mouseIn:state.getIn(['header','mouseIn']),

        login:state.getIn(['login','login'])
    }
};
const mapDispatchToProps=(dispatch)=>{
    return {
        searchFocus(list){
            // const action={
            //     type:'search_focus'
            // };
            // 新的创建 action 方法
            const action = actionCreators.searchFocus();
            dispatch(action);
            list.size===0&&dispatch(actionCreators.getHotList());
        },
        searchBlur(){
            // const action={
            //     type:'search_blur'
            // };
            // 新的创建 action 方法
            const action = actionCreators.searchBlur();
            dispatch(action);
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10)+360
            }else{
                originAngle=360
            }
            spin.style.transform='rotate('+originAngle+'deg)';
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        },

        logout(){
            dispatch(loginActionCreators.logout())
        }
    };
};
export default connect(mapStateToProps,mapDispatchToProps)(Header);