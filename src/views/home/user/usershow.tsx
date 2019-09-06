import * as React from "react";
import "./css/usershow.css";
<<<<<<< HEAD
import { NavLink } from "react-router-dom";
import RouterView from "../../../router/routerView"
=======
import { Table } from "antd";
const columns = [
  {
    title: "用户名",
    dataIndex: "name"
  },
  {
    title: "密码",
    dataIndex: "age"
  },
  {
    title: "身份",
    dataIndex: "address"
  }
];
>>>>>>> luxuan
const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park"
  }
];
class Usershow extends React.Component {
  public render() {
    return (
      <div className="warper">
        <div className="header">
          <h2 className="tit">用户展示</h2>
          <div className="navbox">
<<<<<<< HEAD
            <span><NavLink to="/home/usershow/userdata">用户数据</NavLink></span>
            <span><NavLink to="/home/usershow/iddata">身份数据</NavLink></span>
            <span><NavLink to="/home/usershow/api">api接口权限</NavLink></span>
            <span><NavLink to="/home/usershow/port">身份和api接口关系</NavLink></span>
            <span><NavLink to="/home/usershow/view">视图接口权限</NavLink></span>
            <span><NavLink to="/home/usershow/power">身份和视图权限关系</NavLink></span>
          </div>
        </div>
        <div className="showbox">
          <RouterView {...this.props}></RouterView>
=======
            <span>用户数据</span>
            <span>数据数据</span>
            <span>api接口权限</span>
            <span>身份和api接口关系</span>
            <span>视图接口权限</span>
            <span>身份和视图权限关系</span>
          </div>
        </div>
        <div className="showbox">
          <h1>用户数据</h1>
          <div>
            <Table columns={columns} dataSource={data} size="middle" />
          </div>
>>>>>>> luxuan
        </div>
      </div>
    );
  }
}
export default Usershow;
