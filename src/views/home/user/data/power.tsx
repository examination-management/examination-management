import * as React from 'react';
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
class Power extends React.Component {
    public render(){
        return(
            <div><h1>身份和视图权限关系</h1></div>
        )
    }
    
}
export default Power