import { Form ,Input, Button } from 'antd';
import React from 'react'
import {Register} from '../../api/from'
import {withRouter} from 'react-router-dom'
class NormalLoginForm extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        // console.log('Received values of form: ', values);
        let result = await Register(values)
        if(result.code === 0){
          alert('用户输入错误')
        }else{
          alert('用户输入成功')
          // 路由跳转
          this.props.history.replace('/home')
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
            rules: [{ required: true, message: '手机号要写' }],
          })(
            <Input
              placeholder="手机号"
            />,
          )}
        </Form.Item>
        
        {/* 密码 */}
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '密码要写' }],
          })(
            <Input
              type="password"
              placeholder="输入密码（6-16）位"
            />,
          )}
        </Form.Item>
        {/* 注册 */}
        <Form.Item>
          <Button htmlType="submit" className="login-form-button register">
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default withRouter(WrappedNormalLoginForm)