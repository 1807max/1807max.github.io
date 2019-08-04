import React from 'react';
import {BrowserRouter,Route,Redirect} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './common/window.scss'
import From from './containers/from'
import './component/HomePage/index.scss'
import App from './component/Header';
ReactDOM.render(<BrowserRouter>
<Route path="/" exact component= {From} />
<Route path="/from" component= {From} />
{/* <From /> */}
<Route path="/home" component= {App} />
<Redirect to="/from" />
</BrowserRouter>, document.getElementById('root'));
