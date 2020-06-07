import styled,{createGlobalStyle} from 'styled-components';
// 创建全局样式
export const DetailGlobalStyle=createGlobalStyle`
body{
    background:#f9f9f9;
}
`;
export const DetailWrapper=styled.div`
    overflow:hidden;
    width:1000px;
    margin:10px auto;
    padding: 24px;
    padding-bottom:100px;
    background-color: #ffffff;
    border-radius: 4px;
`;
export const Header=styled.h1`font-size: 30px;
font-weight: 700;
word-break: break-word;
color: #404040;
line-height:1;
height:60px;
`;
export const Content=styled.div`
    img{
        display:block;
        width:100%;
        max-height:500px;
        padding-bottom:20px;
    }
    h5{
        font-size: 20px;
        color:#404040;
        font-weight: 400;
        line-height: 1.8;
        margin-bottom: 20px;
    }
    p{
        font-size: 16px;
        color:#404040;
        font-weight: 400;
        line-height: 1.8;
        margin-bottom: 20px;
        text-indent:2em;
    }
    strong{
        font-weight:bold;
    }
`;



