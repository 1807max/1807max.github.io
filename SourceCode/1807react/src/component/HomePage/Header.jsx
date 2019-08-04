import React, { Component } from 'react'
import "./index.scss"
import { BrowserRouter, Route } from "react-router-dom"
import Context from "./Context"

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
        return (
            <BrowserRouter>
                <div className="HomePage">

                    <Route path="/home" component={(props) => {
                        return <Context {...props}
                            isShow={this.state.isShow}
                            onHandleNone={this.onHandleNone}
                            onHandleShow={this.onHandleShow} />
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
