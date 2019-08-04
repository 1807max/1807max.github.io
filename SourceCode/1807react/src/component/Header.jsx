import React, { Component } from 'react'
import "./HomePage/index.scss"
import { BrowserRouter, Route, Redirect, NavLink } from "react-router-dom"
<<<<<<< HEAD:SourceCode/1807react/src/component/HomePage/Header.jsx
import Context from "./Context"
import Release from './release'
=======
import axios from "axios"
import Context from "./HomePage/Context"
import LikeMsg from "./LikeMsg"
>>>>>>> 898791cb252891017e3d2e10af881ba0383ed365:SourceCode/1807react/src/component/Header.jsx
const navlist = [
    {
        id: 1,
        url: "/home",
        name: "LOFTER首页"
    },
    {
        id: 2,
        url: "/release",
        name: "发布文章"
    },
    {
        id: 3,
        url: "/like",
        name: "喜欢的文章"
    }
]
export default class Html extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isShow: false
        }
    }
    componentDidMount() {
        axios.post("./HomePage.json").then(res => {
            console.log(res)
        })
    }
    onHandleShow = () => {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    onHandleNone = () => {
        this.setState({
            isShow: false
        })
    }
    render() {
        const { isShow } = this.state
        return (
            <BrowserRouter>
                <div className="HomePage">
                    <div className="HP-Top">
                        <div className="HP-T-Left"></div>
                        <div className="HP-T-Right">
                            <Redirect to="home" />
                            <div onClick={this.onHandleShow} className="HP-T-R-Show">
                                <Route path="/:id"
                                    component={({ location }) => {
                                        if (location.id) {
                                            return <div className="HP-T-R-route">{navlist[`${location.id - 1}`].name}</div>
                                        } else {
                                            return <div className="HP-T-R-route">LOFTER首页</div>
                                        }
                                    }} />
                                <div className="HP-T-R-S-delta">▼</div>
                            </div>
                            <div className="HP-T-R-Bottom" style={{ display: isShow ? "block" : "none" }}>
                                {
                                    navlist.map((item) => {
                                        return <span key={item.id}
                                            onClick={this.onHandleNone}>
                                            <NavLink to={{
                                                pathname: `${item.url}`,
                                                id: `${item.id}`
                                            }}
                                                className="HP-T-R-navlist"
                                                activeClassName="HP-T-R-navlist1"
                                            >{item.name}</NavLink>
                                        </span>
                                    })
                                }
                            </div>

                        </div>
                    </div>
                    <Route path="/home" component={(props) => {
                        return <Context {...props}
                            isShow={this.state.isShow}
                            onHandleNone={this.onHandleNone}
                            onHandleShow={this.onHandleShow} />
                    }} />
<<<<<<< HEAD:SourceCode/1807react/src/component/HomePage/Header.jsx
                    <Route path="/release" component={(props) => {
                        return <Release />
=======
                    <Route path="/like" component={(props) => {
                        return <LikeMsg {...props}
                            isShow={this.state.isShow}
                            onHandleNone={this.onHandleNone}
                            onHandleShow={this.onHandleShow} />
>>>>>>> 898791cb252891017e3d2e10af881ba0383ed365:SourceCode/1807react/src/component/Header.jsx
                    }} />
                </div>
                <div className="HP-Bottom">
                    <div>
                        <span>打开APP发现更多精彩</span>
                        <div className="HP-B-Down">立即下载</div>
                    </div>
                </div>
            </BrowserRouter>

        )
    }
}
