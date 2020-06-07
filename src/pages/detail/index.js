import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';

import {
    DetailGlobalStyle,
    DetailWrapper,
    Header,
    Content
} from './style';

class Detail extends Component{
    render(){
        /*
        return (
            <DetailWrapper>
                <DetailGlobalStyle />
                <Header>自由如风</Header>
                <Content>
                    <img src="/img/banner.jpg" alt="" />
                    <h5>内容</h5>
                    <p>绵绵春雨之后，晴空万里，闲云朵朵悠然的于空中信步。初春时节，太阳还不曾泛滥火辣辣赤裸裸的爱恋，只是温柔的优雅的含情脉脉的注视着睡眼惺忪的大地。</p>
                    <p>朱红的脊瓦上停歇着几只鸽子，或灰，或白，或黑白相间。鸟儿不时歪歪小脑袋望望蔚蓝的天空，间或梳理一下蓬松的羽毛。旋即扑棱着翅膀斜刺里飞下，落在院子里，旁若无人的啄食学前班孩子掉在地上的零食——几小段方便面，些许面包屑，幸运的还会觅到几块饼干渣。</p>
                    <p>院子里那株高大的杏树，褐色的枝条经过雨水的清洗鲜灵了许多，枝条上花苞点点。</p>
                    <p>伫立在杏树下，痴痴的望着那点点微红，任思绪飘飞。雨润风清，恍惚间，满树的花儿已露出粉红的笑靥，拇指大，娇小可爱，柔媚动人。淡淡的幽香弥散在空气中，探出舌尖，轻轻地舔沾一下蕊上细密的水珠，那已浸了杏花粉香的水里含着丝缕甜意。闭了眼，静静的品，那感觉微醉微醺，宛若饮下了一口陈年的清酒。</p>
                    <p>和暖的杨柳风携带了春的气息习习吹送着，落英缤纷，那片片粉红的瓣儿飘了满头满衣——</p>
                    <p>“咕咕”，一只鸽子竟然迈着方步踱至脚边，伸长脖子东啄一下，西啄一下。这可爱的鸟儿在找寻食物的同时是不是也叩醒了那个瑰丽的梦呢。</p>
                    <p>(全文完)</p>
                </Content>
            </DetailWrapper>
        )
        */
       const {title,content}=this.props;
       return (
            <DetailWrapper>
                <DetailGlobalStyle />
                    <Header>{title}</Header>
                    <Content dangerouslySetInnerHTML={{__html:content}} />
                </DetailWrapper>
            )
    }
    componentDidMount(){
        this.props.getDetail(this.props.match.params.id);
        //this.props.getDetail(this.props.location.search.replace('?id=',''));
    }
}
//export default Detail;


// console.log(state.getIn(['detail','title']))
// console.log(state.get('detail').get('title'))
// 上面两种方法都可以
const mapState=(state)=>({
    title:state.getIn(['detail','title']),
    content:state.getIn(['detail','content'])
})
const mapDispatch=(dispatch)=>({
    getDetail(id){
        const action=actionCreators.getDetail(id);
        dispatch(action);
    }
})
//export default connect(mapState,mapDispatch)(Detail);
// withRouter 让 Detail 有能力获取到 router 的所有参数和内容
export default connect(mapState,mapDispatch)(withRouter(Detail));