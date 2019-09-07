import * as React from 'react';
import { Table } from "antd";
const columns = [
    {
      title: "视图权限名称",
      dataIndex: "name"
    },
    {
      title: "视图id",
      dataIndex: "age"
    }
  ];
class View extends React.Component {
    public render(){
        return(
            <div><h1>视图接口权限</h1></div>
        )
    }
    
}
export default View