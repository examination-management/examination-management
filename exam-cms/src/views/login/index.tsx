import { Form, Icon, Input, Button, Checkbox,message } from "antd";
import * as React from "react";

import {WrappedFormUtils} from "antd/lib/form/Form"
import {inject,observer} from "mobx-react"
import "./index.css"
interface Props{
  form:WrappedFormUtils,
  user:any,
  history:any,
  abc?:string
}
@inject("user")
class Login extends React.Component <Props>{
  constructor(props:Props){
    super(props);
  }
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        console.log(this.props.user)
        const {code, msg} = await this.props.user.login(values);
        console.log(code,msg)
        if (code === 1){
          // 跳转路由
          this.props.history.replace('/home');
        }else{
          // 提示错误
          message.error(msg || '用户名或密码错误');
        }
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("user_name", {
             validateTrigger: 'onBlur',
            rules: [{ required: true, message: "Please input your username!" },{
              validator:(rule,value,callback)=>{
                if(/[a-z]{5,20}/.test(value)){
                  callback()
                }else{
                  callback("please input vaild username!")
                }
              }
            }]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Username"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("user_pwd", {
            validateTrigger:"onBlur",
            rules: [{validator:(rule,value,callback)=>{
              if(/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/.test(value)){
                callback()
              }else{
                callback("please input vaild password!")
              }
            }}],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator("remember", {
            valuePropName: "checked",
            initialValue: true
          })(<Checkbox>Remember me</Checkbox>)}
          <a className="login-form-forgot" href="">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(Login);
