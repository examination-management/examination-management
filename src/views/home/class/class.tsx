import * as React from 'react';
import { inject } from "mobx-react";
@inject("manage")
class Class extends React.Component {
    public render(){
        return(
            <div>班级管理</div>
        )
    }
    
}
export default Class