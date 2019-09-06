import * as React from 'react';
import { Button,Table } from 'antd';
import './css/management.css'
// import {Table, Input, Button, Icon} from 'antd';
// import Highlighter from 'react-highlight-words';
// import {createContext} from 'react/index'

// interface state{
//     options:any,
//     value:any,
//     history:any
//   }


const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
    splice:'修改',
    remove:'删除'
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
    splice:'修改',
    remove:'删除'
  },
];

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    remove:'删除'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    remove:'删除'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    remove:'删除'
  },
];


// const columns = [
//   { title: 'Name', dataIndex: 'name', key: 'name' },
//   { title: 'Age', dataIndex: 'age', key: 'age' },
//   { title: 'Address', dataIndex: 'address', key: 'address' },
//   {
//     title: 'Action',
//     dataIndex: '',
//     key: 'x',
//     render: () => <a>Delete</a>,
//   },
// ];

// const data = [
//   {
//     key: 1,
//     name: 'John Brown',
//     age: 32,
//     address: 'New York No. 1 Lake Park',
//     description: 'My name is John Brown, I am 32 years old, living in New York No. 1 Lake Park.',
//   },
//   {
//     key: 2,
//     name: 'Jim Green',
//     age: 42,
//     address: 'London No. 1 Lake Park',
//     description: 'My name is Jim Green, I am 42 years old, living in London No. 1 Lake Park.',
//   },
//   {
//     key: 3,
//     name: 'Joe Black',
//     age: 32,
//     address: 'Sidney No. 1 Lake Park',
//     description: 'My name is Joe Black, I am 32 years old, living in Sidney No. 1 Lake Park.',
//   },
// ];
  
class Mangement extends React.Component {
 state = {
      size: 'large',
    };
  
    handleSizeChange = (e:any) => {
      this.setState({ size: e.target.value });
    };
  public render() {
    const { size } = this.state;
    return (
      <div className="ant-layout1">
        <h2>
          班级管理
        </h2>
        <div className="ant-layout-content1">
          <div className="ant-layout-content-box">
           <div>
           <Button type="primary" className="button"> 添加班级</Button>
           </div>
           <div>
            {/* <Table
              columns={columns}
              expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
              dataSource={data}
            /> */}
            <Table dataSource={dataSource} columns={columns} />;
          </div>
          </div>
          <div>
        
          </div>
        </div>
      </div>
    );
  }

    
}
export default Mangement