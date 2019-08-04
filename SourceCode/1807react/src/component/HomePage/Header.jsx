import React, { Component } from 'react'
import "./index.scss"
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom"
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
            <div className="HomePage">
                <div className="HP-Top">
                    <div className="HP-T-Left"></div>
                    <div className="HP-T-Right">
                        <BrowserRouter>
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
                        </BrowserRouter>
                    </div>
                </div>
                <div>
                    123
                </div>
            </div>
        )
    }
}
