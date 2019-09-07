import * as React from 'react';
import { Table } from "antd";
const columns = [
    {
      title: "api权限名称",
      dataIndex: "name"
    },
    {
      title: "api权限url",
      dataIndex: "age"
    },
    {
      title: "api权限方法",
      dataIndex: "address"
    }
  ];
class Api extends React.Component {
    public render(){
        return(
            <div>
                <h1>用户数据</h1>
            </div>
        )
    }
    
}
export default Api