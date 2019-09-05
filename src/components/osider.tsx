import * as React from "react";
import { Breadcrumb, Dropdown, Icon, Layout, Menu } from "antd";
const { Content, Header, Sider } = Layout;
import { NavLink } from "react-router-dom";
const { SubMenu } = Menu;
class Osider extends React.Component {
  public render() {
    return (
      <Sider width={200}>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%", borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="sliders" />
                试题管理
              </span>
            }
          >
            <Menu.Item key="1">
              <NavLink to="/home/add">添加试题</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to="/home/classify">试题分类</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to="/home/lookover">查看试题</NavLink>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="user" />
                用户管理
              </span>
            }
          >
            <Menu.Item key="5">添加用户</Menu.Item>
            <Menu.Item key="6">用户展示</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub3"
            title={
              <span>
                <Icon type="schedule" />
                考试管理
              </span>
            }
          >
            <Menu.Item key="7">添加考试</Menu.Item>
            <Menu.Item key="8">试卷列表</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="project" />
                班级管理
              </span>
            }
          >
            <Menu.Item key="9">班级管理</Menu.Item>
            <Menu.Item key="10">教室管理</Menu.Item>
            <Menu.Item key="11">学生管理</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="project" />
                阅卷管理
              </span>
            }
          >
            <Menu.Item key="12">特批班级</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    );
  }
}
export default Osider;
