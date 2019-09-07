import * as React from 'react';
import { Table } from "antd";
const columns = [
    {
      title: "身份",
      dataIndex: "name"
    },
    {
      title: "视图名称",
      dataIndex: "age"
    },
    {
      title: "视图id",
      dataIndex: "address"
    }
  ];
class Iddata extends React.Component {
    public render(){
        return(
            <div><h1>身份数据</h1></div>
        )
    }
    
}
export default Iddata