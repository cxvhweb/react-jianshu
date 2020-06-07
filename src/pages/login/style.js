import styled,{createGlobalStyle} from 'styled-components';

export const LoginGlobalStyle=createGlobalStyle`
body{
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
}
`;
export const LoginWrapper=styled.div`
width: 400px;
margin: 60px auto 0;
padding: 50px 50px 30px;
background-color: #fff;
border-radius: 4px;
box-shadow: 0 0 8px rgba(0,0,0,.1);
vertical-align: middle;
display: inline-block;
`;
export const Input=styled.input`
width: 300px;
height: 50px;
padding: 0 10px;
border: 1px solid #c8c8c8;
border-radius: 0 0 4px 4px;
background-color: hsla(0,0%,71%,.1);
margin-bottom: 20px;
`;
export const Button=styled.div`
width: 320px;
font-size: 18px;
border: none;
border-radius: 25px;
color: #fff;
background: #3194d0;
cursor: pointer;
outline: none;
display: block;
clear: both;
margin: auto;
height: 40px;
line-height: 40px;
vertical-align: middle;
`;