import * as React from "react";
import {inject, observer} from 'mobx-react';
import { Menu, Icon} from 'antd';

const { SubMenu } = Menu;
interface Props {
  question: any
}
@inject('question')
@observer
class Slid extends React.Component {
  state = {
    collapsed: false,
    slidList:[
           {con:"试题管理",children:["添加试题","试题分类","查看试题"]},
           {con:"用户管理"},
           {con:"考试管理"},
           {con:"班级管理"},
           {con:"阅卷管理"}
       ]
  };
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  public render() {
    let {slidList}=this.state;
    return (
      <div style={{ width: 256 }}>
       
      </div>
    );
  }
}

export default Slid;




