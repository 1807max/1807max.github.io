import React, { Component } from 'react'
import './index.scss'
import { Icon } from 'antd';
import Fromitem from './Fromitem'
import Fromlogin from './Fromlogin'
// import App from '../../component/Header';
import {NavLink,Switch,Route,Redirect} from 'react-router-dom'
export default class From extends Component {
    render() {
        return (
            <div className="zd-from">
                <div className="top">
                    <div className="img">
                        <img src="http://www.lofter.com/mobile/src/images/wap2/login/lofter@2x.png" alt="0" />
                    </div>
                    
                    <div className="router">
                        <NavLink to="/from/login">注册</NavLink>
                        <NavLink to="/from/register">登录</NavLink>
                    </div>
                </div>
                <div className="main">
                <Switch>
                    <Route path="/from/login" component = {Fromitem}/>
                    <Route path="/from/register" component = {Fromlogin}/>
                    <Redirect to="/from/login" />
                </Switch>
                </div>
                <div className="footer">
                    <p className="title">社交账号登录</p>
                    <div className="box">
                        <Icon type="qq" />
                        <Icon type="weibo" />
                        <Icon type="calendar" />
                    </div>
                </div>
            </div>
        )
    }
}
