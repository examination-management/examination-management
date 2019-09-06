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
  
class Mangement extends React.Component {
 state = {
      size: 'large',
      flag:true
    };
  
    handleSizeChange = (e:any) => {
      this.setState({ size: e.target.value });
    };
  public render() {
    const { size,flag } = this.state;
    return (
      <div className="layout1">
        <h2>
          班级管理
        </h2>
        <div className="layout-content1">
          <div className="layout-content-box">
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
          {/* <div>
        
          </div> */}
        </div>
        
      </div>
    );
  }
  
}
export default Mangement