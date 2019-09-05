import * as React from 'react';
import {inject,observer} from "mobx-react"
import { Tag } from 'antd';
import {  Select } from 'antd';
import "./content.css"
const { Option } = Select;
@inject("question")
@observer
class Classify extends React.Component {
    state={
        classifydata:[]
    }
    public render(){
        let {classifydata}=this.state;
        console.log(classifydata)
        return(
            <div className='content-wrap'>
            <div>
            <div className='title'>查看试题</div>
            <div className='classify'>
                <div className='content-header'>
                  <div className='classifyTitle'>课程类型</div>
                  <div className='classify-con'>
                    <li>All</li>
                    <li>javaScript上</li>
                    <li>javaScript上下</li>
                    <li>模块开发</li>
                    <li>移动端开发</li>
                    <li>node基础</li>
                    <li>组件开发(vue)</li>
                    <li>渐进式开发(react)</li>
                    <li>项目实战</li>
                    <li>javaScript高级</li>
                    <li>node高级</li>
                  </div>
                  <div className='exam'>
                  <div>考试类型 : <input type="text"/></div>
                  <div>题目类型 : <input type="text"/></div>
                </div>
                </div>
            </div>
            </div>
            
            <div className='content-con'>
                  <div className='content-con-item'>
                    <p>机器人归位</p>
                    <Tag color="magenta">代码补全</Tag>
                    <Tag color="magenta">avaScript上</Tag>
                    <Tag color="magenta">周考1</Tag>
                  </div>
                  <div>dingshaoshan发布</div>
                  
            </div>
          </div>
        )
    }
    componentDidMount(){ 
      this.getlist()
    }
    public getlist=async ()=>{
      let reult=await this.props["question"].getQuestion()
      this.setState({classifydata:reult.data})
  }

}
export default Classify
