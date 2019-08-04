import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './common/window.scss'
import From from './containers/from'
ReactDOM.render(<BrowserRouter><From /></BrowserRouter>, document.getElementById('root'));
