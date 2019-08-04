/// 注册
import { Form,  Input, Button} from 'antd';
import {withRouter} from 'react-router-dom'
import React from 'react'
import {Login} from '../../api/from'
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        let result = await Login(values)
        if(result.code === 0){
          alert('账户已被注册')
        }else{
          alert('注册成功')
          // 路由跳转
          this.props.history.replace('/register')
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
      {/* 账号 */}
        <Form.Item>

          {getFieldDecorator('username', {
            rules: [{ required: true, message: '手机号要写' },{validator:this.chexkPhone}],
          })(
            <Input
              placeholder="手机号"
            />,
          )}
        </Form.Item>
        {/* 图片验证码 */}
        <Form.Item>
          {getFieldDecorator('imgrequired', {
            rules: [{ required: true, message: '图片验证码要写' }],
          })(
            <Input 
              placeholder="图片验证码"
            />
          )}
          
        </Form.Item>
        {/* 验证码 */}
        <Form.Item>
          {getFieldDecorator('required', {
            rules: [{ required: true, message: '验证码要写' }],
          })(
            <Input
              placeholder="验证码"
            />,
          )}
        </Form.Item>
        {/* 密码 */}
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码要写' },{validator:this.chexkPassword}],
          })(
            <Input
              type="password"
              placeholder="设置密码（6-16）位"
            />,
          )}
        </Form.Item>
        {/* 注册 */}
        <Form.Item>
          <Button htmlType="submit" className="login-form-button register">
            注册
          </Button>
        </Form.Item>
      </Form>
    );
  }
  // 手机号验证
  chexkPassword = (rule,value,call) =>{
    if(!value){
      call('必须输入密码')
    }else if(value.length<6 || value.length>16){
      call('必须输入6-16位')
    }else{
      call()
    }
  }
  chexkPhone = (rule,value,call) =>{
    if(!value){
      call('必须输手机号')
    }else if(!/^1([38]\d|5[0-35-9]|7[3678])\d{8}$/.test(value)){
      call('必须输手机号')
    }else{
      call()
    }
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default withRouter(WrappedNormalLoginForm)