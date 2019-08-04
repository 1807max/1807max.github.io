import React, { Component } from 'react'

export default class Release extends Component {
    constructor(props) {
        super(props)
        console.log(props)
    }
    render() {
        return (
            <div style={{height:"160vw"}}>
                <div className='HP-Release'>
                    <input tabIndex="1" maxLength="50" type="text" placeholder="文章标题" className='Release-inp1'/>
                    <textarea tabIndex="2" placeholder="正文" className="Release-inp2" hasautoset="true"></textarea>
                    <div className='Release-wz'>
                        <div className='Release-wz-one'>▶</div>
                        <h5 className="s-fc4">选项</h5>
                        <p>发布到****的博客上</p>
                    </div>
                    <button type="submit" className='Release-btn'>发布</button>
                </div>
            </div>
        )
    }
}
