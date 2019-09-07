import * as React from 'react';
import { Table } from "antd";
const columns = [
    {
      title: "身份名称",
      dataIndex: "name"
    },
    {
      title: "api权限名称",
      dataIndex: "age"
    },
    {
      title: "api权限url",
      dataIndex: ""
    },{
        title: "api权限方法",
        dataIndex: ""
    }
  ];
class Port extends React.Component {
    public render(){
        return(
            <div><h1>身份和api接口关系</h1></div>
        )
    }
    
}
export default Port