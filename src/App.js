import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';

import Header from './common/header';

import Home from './pages/home';
//import Detail from './pages/detail';
import Detail from './pages/detail/loadable';//加载异步组件
import Login from './pages/login';
import Write from './pages/write';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Route path="/" exact component={Home}></Route>
        <Route path="/detail/:id" exact component={Detail}></Route>
        <Route path="/login" exact component={Login}></Route>
        <Route path="/write" exact component={Write}></Route>
      </BrowserRouter>
    </Provider>
  );
}
export default App;