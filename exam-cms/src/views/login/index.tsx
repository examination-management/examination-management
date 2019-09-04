import { Form, Icon, Input, Button, Checkbox } from "antd";
import * as React from "react";
import "./index.css"
import {WrappedFormUtils} from "antd/lib/form/Form"
import {inject,observer} from "mobx-react"
interface Props{
  form:WrappedFormUtils,
  user:any
}
@inject("user")
class Home extends React.Component <Props>{
  handleSubmit=(e:React.FormEvent)=> {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        let result=await this.props.user.login(values)

      }
    });
  };

  render() {
    console.log(this.props.user.login)
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <Form.Item>
          {getFieldDecorator("user_name", {
            validateTrigger:"onBlur",
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
export default Form.create()(Home);
