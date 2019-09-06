import * as React from 'react';
import './css/class.css'
import { Table, Divider, Tag ,Button,Input} from 'antd';

const { Column, ColumnGroup } = Table;

const data = [
    {
      key: '1',
      firstName: '1609B',
      lastName:'1609B',
      address: 'New York No. 1',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: '1609B',
      lastName:'1609B',
      address: 'London No. 1',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: '1609B',
      lastName:'1609B',
     
      address: 'Sidney No. 1',
      tags: ['cool', 'teacher'],
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
            <Button type="primary" className="button" onClick={this.addclassify}> 添加班级</Button>
            </div>
            <div>
              {/* <Table
                columns={columns}
                expandedRowRender={record => <p style={{ margin: 0 }}>{record.description}</p>}
                dataSource={data}
              /> */}
              <Table dataSource={data}>
  
      <Column title="班级名" dataIndex="firstName" key="firstName" />
      <Column title="课程名" dataIndex="lastName" key="lastName" />
    <Column title="教室号" dataIndex="address" key="address" />
    <Column
      title="操作"
      key="action"
      render={(text, record:any) => (
        <span>
         <a>修改 {record.lastName}</a>
          <Divider type="vertical" />
          <a>删除</a>
        </span>
      )}
    />
  </Table>
            </div>
          </div>
         
        </div>
        <div className={flag?"wraper isshow":"wraper"}>
            <div className="addbox">
                <div className="addbody">
                    <h3>班级添加</h3>
                    <span onClick={()=>{this.setState({flag:true})}}>X</span>
                </div>
                <div className="addform">
                    <p>班级名</p>
                    <Input placeholder="班级名" />
                    <p>教室号</p>
                    <Input placeholder="教室号" />
                    <p>课程名</p>
                    <Input placeholder="课程名" />
                    <div className="addsub">
                        <button className="surebtn">确定</button>
                        <button className="cancelbtn" onClick={()=>{this.setState({flag:true})}}>取消</button>
                    </div>
                </div>
                
            </div>
       
        </div>
      </div>
    );
  }
  public addclassify=()=>{
    this.setState({flag:!this.state.flag})
  }
   
    
}
export default Mangement