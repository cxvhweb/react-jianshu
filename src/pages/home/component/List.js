import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';

import { Link } from 'react-router-dom';

import {
    Listitem,
    Listinfo,
    Loadmore
} from '../style';

class List extends PureComponent{
    render(){
        const {list,getMoreList,page}=this.props;
        return (
            <div>
                {/*<a href='/detail'>非单页应用</a>*/}  
                {
                    list.map(
                        (item,index)=>(
                            
                            
                                <Listitem key={
                                /*item.get('id')*/
                                index
                            }>
                                    <img className="pic" src={item.get('imgUrl')} alt="" />
                                        <Listinfo>
                                        <h3 className="title"><Link to={'/detail/'+item.get('id')}>{item.get('title')}</Link></h3>
                                        <p className="desc"><Link to={'/detail/'+item.get('id')}>{item.get('desc')}</Link></p>
                                    </Listinfo>
                                </Listitem>
                            
                        )
                    )
                }
                <Loadmore
                    onClick={
                        ()=>{
                            getMoreList(page)
                        }
                    }
                >更多文字</Loadmore>
            </div>
        )
    }
}
//export default List;
const mapState=(state)=>({
    //list:state.get('home').get('articleList')
    list:state.getIn(['home','articleList']),
    page:state.getIn(['home','articlePage'])
});
const mapDispatch=(dispatch)=>({
    getMoreList(page){
        //actionCreators
        dispatch(actionCreators.getMoreList(page))
    }
});

//export default connect(mapState,null)(List);
export default connect(mapState,mapDispatch)(List);