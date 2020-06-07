import styled from 'styled-components';

export const HomeWrapper=styled.div`
    width:960px;
    margin:0 auto;
    overflow:hidden;
`;
export const HomeLeft=styled.div`
    width:625px;
    margin-left:15px;
    padding-top:30px;
    float:left;
    .banner-img{
        display:block;
        width:625px;
        height:351px;
    }
`;
export const HomeRight=styled.div`
    width:280px;
    float:right;
`;
// Topic
export const TopocWrapper=styled.div`
    padding:20px 0 10px 0;
    overflow:hidden;
    margin-left:-18px;
    border-bottom:1px solid #dcdcdc;
`;
export const TopicItem=styled.div`
    margin-left:18px;
    margin-bottom:18px;
    float:left;
    background-color:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    color:#000000;
    border:1px solid #dcdcdc;
    border-radius:4px;
    padding-right:10px;
    .topic-pic{
        display:block;
        width:32px;
        height:32px;
        float:left;
        padding-right:10px;
    }
`;
// List
export const Listitem=styled.div`
    overflow:hidden;
    padding:20px 0;
    border-bottom:1px solid #dcdcdc;
    .pic{
        display:block;
        float:right;
        width:125px;
        height:100px;
        border-radius:10px;
    }
`;
export const Listinfo=styled.div`
    width:500px;
    .title a{
        text-decoration:none;
        font-size:18px;
        line-height:27px;
        color:#333333;
        font-weight:bold;
    }
    .desc a{
        text-decoration:none;
        line-height:24px;
        font-size:13px;
        color:#999999;
    }
`;
// Recommend
export const HomeRightBoard=styled.div`
    padding-top: 15px;
    padding-bottom: 4px;
    min-height: 228px;
`;
export const HomeRightBoardItem=styled.a`
display:block;
height:;
min-height: 50px;
margin-bottom: 6px;
background-image:url(${
    (props)=>props.imgUrl
});
background-size:contain;
/*
    .pic{
        display:block;
        width: 100%;
        min-height: 50px;
        margin-bottom: 6px;
        border-radius: 4px;
    }*/
`;
export const HomeRightCode=styled.a.attrs({
    href:'https://github.com/cxvhweb/react-jianshu'
})`
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background-color: #fff;
    display:block;
    box-sizing: border-box;
    .pic{
        
        width: 60px;
        height: 60px;
        opacity: .85;
        vertical-align: middle;
    }
    .info{
        display: inline-block;
        vertical-align: middle;
        margin-left: 7px;}
    .title{
        font-size: 15px;
        color: #333;}
    .description{
        margin-top: 4px;
        font-size: 13px;
        color: #999;
    }
`;
export const HomeRightWriteHd=styled.div`
.title{
    font-size: 14px;
    color: #969696;
    line-height:2;
}
`;
export const HomeRightWriteChange=styled.div`

    float:right;
    font-size: 14px;
    color: #969696;
    line-height:2;
    .iconfont{
        font-size: 14px;
        display:block;
        float:left;
        transform-origin: center center;
        transition: transform .2s ease-in;
    }
    /*&:active{
        .iconfont{
            animation:rotate360 .3s ease-in;
        }
    }*/
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
`;
export const HomeRightWriteBd=styled.div`
margin: 0 0 20px;
text-align: left;
`;
export const HomeRightWriteItem=styled.div`
margin-top: 15px;line-height: 20px;
box-sizing: border-box;
    .pic{
    float: left;
    width: 46px;
    height: 46px;
    display: block;
    margin-right: 10px;
    border: 1px solid #ddd;
    border-radius: 50%;
    possition:relative;
    }
    .title{
        padding-top: 5px;
        font-size: 14px;
        overflow:hidden;
    }
    .desc{
        margin-top: 2px;
        margin-bottom:10px;
        font-size: 12px;
        color: #969696;}
    .attention{
        margin-top: 5px;
        padding: 0;
        font-size: 13px;
        color: #42c02e;float:right;}
`;
export const HomeRightWriteMore=styled.a.attrs({
    href:'https://github.com/cxvhweb/react-jianshu'
})`
display:block;
padding: 7px 7px 7px 12px;
width: 100%;
font-size: 13px;
text-decoration:none;
color: #787878;
background-color: #f7f7f7;
border: 1px solid #dcdcdc;
border-radius: 4px;
box-sizing: border-box;
text-align:center;
cursor:pointer;
`;
export const Loadmore=styled.div`
width:100%;
height:40px;
line-height:40px;
margin:30px 0;
background:#a5a5a5;
text-align:center;
border-radius:20px;
color:white;
cursor:pointer;
`;

// BackTop
export const BackTop=styled.div`
position:fixed;
right:100px;
bottom:30px;
width:60px;
height:40px;
padding:10px 0;
line-height:20px;
text-align:center;
border:1px solid #cccccc;
z-index:666;
cursor:pointer;
`;
