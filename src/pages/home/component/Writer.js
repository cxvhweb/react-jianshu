import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import {
    HomeRightWriteHd,
    HomeRightWriteChange,
    HomeRightWriteBd,
    HomeRightWriteItem,
    HomeRightWriteMore
} from '../style';
class Writer extends PureComponent{
    render(){
        const {list,handleChangeList,totalPage,page}=this.props;
        const newList = list.toJS(page);
        const pageList=[];
        
            for(let i=(page-1)*6;i<page*6;i++){
                if(newList.length&&newList[i]){
                    pageList.push(
                        <HomeRightWriteItem key={newList[i].id}>
                        <img src={newList[i].imgUrl} className="pic" alt="" />
                <h5 className="title"><span className="attention">+关注</span>{newList[i].title}</h5>
                <p className="desc">写了{newList[i].keywordsLen}字 · {newList[i].like}喜欢</p>
                    </HomeRightWriteItem>
                    );
            }
        }
        return (
            <div>
                <HomeRightWriteHd onClick={()=>{
                    handleChangeList(page,totalPage,this.spinIcon)
                }}>
                    <HomeRightWriteChange><span className='iconfont'
                        ref={
                            (icon)=>{this.spinIcon=icon}
                        }
                    >&#xe851;</span>换一批</HomeRightWriteChange>
                    <h5 className="title">推荐作者</h5>
                </HomeRightWriteHd>
                <HomeRightWriteBd>
                    {
                        /*
                        list.map(item=>(
                            <HomeRightWriteItem key={item.id}>
                                <img src={item.get('imgUrl')} className="pic" alt="" />
                        <h5 className="title"><span className="attention">+关注</span>{item.get('title')}</h5>
                        <p className="desc">写了{item.get('keywordsLen')}字 · {item.get('like')}喜欢</p>
                            </HomeRightWriteItem>
                        ))
                        */
                       pageList
                    }
                    <HomeRightWriteMore>查看全部&nbsp;&gt;</HomeRightWriteMore>
                </HomeRightWriteBd>
            </div>
        )
    }
    // 挂载完毕
    componentDidMount(){
        //this.props.getWriteList();
        //在首页做个请求，这里调用方法先注释
    }
}
//export default Writer;
const mapState=(state)=>({
    list:state.getIn(['home','writeList']),
    page:state.getIn(['home','page']),
    totalPage:state.getIn(['home','totalPage'])
});
const mapDispatch=(dispatch)=>{
    return {
        getWriteList(){
            dispatch(actionCreators.getWriteList())
        },
        handleChangeList(page,totalPage,spin){
            let originAngle=spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle){
                originAngle=parseInt(originAngle,10)+360
            }else{
                originAngle=360
            }
            spin.style.transform='rotate('+originAngle+'deg)';
            debugger
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1));
            }else{
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapState,mapDispatch)(Writer);