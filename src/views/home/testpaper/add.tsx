import * as React from 'react';
import { Input,Cascader ,Button ,Icon} from 'antd';

import './css/add.css'
interface state{
    options:any,
    value:any,
    history:any
  }
  interface Props{
    history:any
  }
class Add extends React.Component {
    state = {
        value: '',
        options :[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              isLeaf: false,
            },
            {
              value: 'jiangsu',
              label: 'Jiangsu',
              isLeaf: false,
            },
          ],
          
      };
      onChange = (value:any, selectedOptions:any) => {
        console.log(value, selectedOptions);
      };
    
      loadData =( selectedOptions:any) => {
        const targetOption = selectedOptions[selectedOptions.length - 1];
        targetOption.loading = true;
    
        // load options lazily
        setTimeout(() => {
          targetOption.loading = false;
          targetOption.children = [
            {
              label: `${targetOption.label} Dynamic 1`,
              value: 'dynamic1',
            },
            {
              label: `${targetOption.label} Dynamic 2`,
              value: 'dynamic2',
            },
          ];
          this.setState({
            options: [...this.state.options],
          });
        }, 1000);
      };

    public render(){
        const { value,options } = this.state;
        return(
            <div className="layout1">
                <h2>
                试题添加
                </h2>
                <div className="layout-content1">
                    <div className="layout-content-box" >
                        <div className="row form-item">
                           <h4>题目信息</h4>
                           <p>题干</p>
                           <Input size="large" className="input" placeholder="large size" />
                        </div>
                        <div className="row form-item">
                           <h4>题目主题</h4>
                           <div className="for-container">
                               <div className="for-controlbar">
                                   <ul>
                                       <li title="上一步（ctrl + z）" >
                                       
                                       <Icon type="arrow-left" />
                                        </li>
                                        <li title="下一步（ctrl + y）">
                                            <Icon type="arrow-right" />
                                        </li>
                                        <li data-type="h1" title="一级标题"><span></span>H1<span></span></li>
                                        <li data-type="h2" title="二级标题"><span></span>H2<span></span></li>
                                        <li data-type="h3" title="三级标题"><span></span>H3<span></span></li>
                                        <li data-type="h4" title="四级标题"><span></span>H4<span></span></li>
                                        <li data-type="image" title="图片"> <Icon type="bank" /></li>
                                        <li data-type="link" title="超链接"> <Icon type="bank" /></li>
                                        <li data-type="code" title="代码块"> <Icon type="bank" /></li>
                                        <li data-type="code" title="保存（ctrl + s）"><Icon type="eye" /></li>
                                    </ul>
                                    <div className="for-container-box">
                                        <div className="for-container-left"><p>1</p></div>
                                        <div className="for-container-right">
                                        <Input  placeholder="Basic usage" className="input1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="cascader-list">
                            <div className="cascader">
                            <h4>请选择考试类型:</h4>
                            <Cascader
                                    options={options}
                                    onChange={this.onChange}
                                    changeOnSelect
                                />
                            </div>
                            <div className="cascader">
                            <h4>请选择课程类型:</h4>
                            <Cascader
                                    options={options}
                                    onChange={this.onChange}
                                    changeOnSelect
                                />
                            </div>
                            <div className="cascader">
                            <h4>请选择题目类型:</h4>
                            <Cascader
                                    options={options}
                                    onChange={this.onChange}
                                    changeOnSelect
                                />
                            </div>
                        </div>
                        <div className="row form-item">
                           <h4>答案信息</h4>
                           <div className="for-container">
                               <div className="for-controlbar">
                                   <ul>
                                       <li title="上一步（ctrl + z）" >
                                       
                                       <Icon type="arrow-left" />
                                        </li>
                                        <li title="下一步（ctrl + y）">
                                            <Icon type="arrow-right" />
                                        </li>
                                        <li data-type="h1" title="一级标题"><span></span>H1<span></span></li>
                                        <li data-type="h2" title="二级标题"><span></span>H2<span></span></li>
                                        <li data-type="h3" title="三级标题"><span></span>H3<span></span></li>
                                        <li data-type="h4" title="四级标题"><span></span>H4<span></span></li>
                                        <li data-type="image" title="图片"> <Icon type="bank" /></li>
                                        <li data-type="link" title="超链接"> <Icon type="bank" /></li>
                                        <li data-type="code" title="代码块"> <Icon type="bank" /></li>
                                        <li data-type="code" title="保存（ctrl + s）"><Icon type="eye" /></li>
                                    </ul>
                                    <div className="for-container-box">
                                        <div className="for-container-left"><p>1</p></div>
                                        <div className="for-container-right">
                                        <Input  placeholder="Basic usage" className="input1"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="button"><Button type="primary">提交</Button></div>
                    </div>
                </div>
            </div>
        )
    }

    
}
export default Add

