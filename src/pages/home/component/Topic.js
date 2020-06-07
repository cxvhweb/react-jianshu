import React,{PureComponent} from 'react';
// 链接 store
import {connect} from 'react-redux';
//import Itemicon from '../../../static/item-icon.jpg';
import {
    TopocWrapper,
    TopicItem
} from '../style';
class Topic extends PureComponent{
    render(){
        const {list}=this.props;
        return (
            <TopocWrapper>
                {/* <TopicItem>
                    <img className='topic-pic' src={Itemicon} />
                    社会热点
                </TopicItem> */

                
                /* immutable 数据获取方法 item.get('imgUrl'),传统方法 item.imgUrl */
                /*
                    list.map((item,idx)=>{
                        return (
                            <TopicItem key={item.get('id')}>
                                <img className='topic-pic' src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    })
                    下面方法也可以
                */
                    list.map(
                        (item,idx)=>(
                            <TopicItem key={item.get('id')}>
                                <img alt="" className='topic-pic' src={item.get('imgUrl')} />
                                {item.get('title')}
                            </TopicItem>
                        )
                    )
                }
            </TopocWrapper>
        );
    }
}
//export default Topic;
const mapState=(state)=>({
    list:state.get('home').get('topicList')
});
export default connect(mapState,null)(Topic);