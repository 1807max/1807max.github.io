import axios from './index'
// 表单注册
export let Login = (obj)=>{
    return axios('/login',obj,'POST')
}
// 表单登录
export let Register = (obj) => {
    return axios('/register',obj,'POST')
}