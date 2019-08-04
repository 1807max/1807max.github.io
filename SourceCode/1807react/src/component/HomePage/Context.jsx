import React, { Component } from 'react'
import { NavLink, Route, Redirect } from "react-router-dom"
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
export default class Home extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        const { isShow, onHandleShow, onHandleNone } = this.props
        return (
            <React.Fragment>
                <div className="HP-Top">
                    <div className="HP-T-Left"></div>
                    <div className="HP-T-Right">
                        <Redirect to="home" />
                        <div onClick={onHandleShow} className="HP-T-R-Show">
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
                                        onClick={onHandleNone}>
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
                <div className="HP-Context">
                    <p className="HP-C-Header">LOFTER元气客服酱</p>
                    <p className="HP-C-Title">小嘤回忆之---西北甘肃自驾游</p>
                    <div>
                        <p className="HP-C-Context">前几天小嘤收到了一份惊喜的礼物，是一个兰州小伙伴特地寄过来的手抓羊肉，超级好吃的！！</p>
                        <p className="HP-C-Context">说起这个兰州的小伙伴，就不得不说起我的西北之旅，那是小嘤记忆中一次值得纪念的自驾游。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                        <p className="HP-C-Context">记得那个时候我们是从上海出发，直飞兰州的，小嘤这边为了给大家更方便介绍以及分享这次旅行，特地整理了下当时的行程。</p>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
