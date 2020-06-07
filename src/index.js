import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
// 全局样式
import {MyGlobalStyle} from './style';
// 全局样式
import {IconFont} from './static/font/IconFonts';
ReactDOM.render(
    <React.Fragment>
      <App />
      <MyGlobalStyle />
      <IconFont />
    </React.Fragment>
,document.getElementById('root'));