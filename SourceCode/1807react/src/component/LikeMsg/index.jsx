import React, { Component } from 'react'
import { BrowserRouter, NavLink } from "react-router-dom"
export default class LikeMsg extends Component {
    render() {
        return (
            <div className="likemsg">
                <div className="contentBox">
                    <p>暂无内容</p>
                </div>
                <div className="toBar">
                    <NavLink to="/home" className="tag" style={{ marginLeft: "5px" }} >LOFTER首页</NavLink>
                    <NavLink to="/" className="tag" style={{ marginLeft: "140px" }}>退出</NavLink>
                    <span className="tag" style={{ marginLeft: "20px" }}>pc视图</span>
                </div>
            </div>
        )
    }
}
