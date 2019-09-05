import * as React from 'react';
import {inject,observer} from "mobx-react"
@inject("question")
class Classify extends React.Component {
    state={
        classifydata:[]
    }
    public render(){
        return(
            <div>分类</div>
        )
    }
    componentDidMount(){
        let getlist=async ()=>{
            let reult=await this.props["question"].getQuestion()
            console.log(reult,"ddddddddddddddddd")
        }
        getlist()
    }

}
export default Classify
