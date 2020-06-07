import React,{PureComponent} from 'react';
import {connect} from 'react-redux';
import {
    HomeRightBoard,
    HomeRightBoardItem,
    HomeRightCode
} from '../style';
class Recommend extends PureComponent{
    render(){
        const {list}=this.props;
        return (
            <div>
                <HomeRightBoard>
                    {
                        /*
                        list.map((item)=>(
                            <HomeRightBoardItem key={item.get('id')} href={item.get('url')}>
                                <img src={item.get('imgUrl')} alt="" className="pic" />
                            </HomeRightBoardItem>
                        ))
                        css 传参，背景图
                        */
                        list.map((item)=>(
                            <HomeRightBoardItem key={item.get('id')} href='/write' imgUrl={item.get('imgUrl')}></HomeRightBoardItem>
                        ))
                    }
                </HomeRightBoard>
                <HomeRightCode>
                    <img className="pic" src="/img/code.png" alt="" />
                    <div className="info">
                        <h5 className="title">下载简书手机App&nbsp;&gt;</h5>
                        <p className="description">随时随地发现和创作内容</p>
                    </div>
                </HomeRightCode>
            </div>
        )
    }
}
//export default Recommend;
const mapState=(state)=>({
    list:state.getIn(['home','boardList'])
});
export default connect(mapState,null)(Recommend);