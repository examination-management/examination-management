import {observable, action} from 'mobx'



class Question{
    @observable slidList = [
        {con:"试题管理",children:["添加试题","试题分类","查看试题"]},
        {con:"用户管理"},
        {con:"考试管理"},
        {con:"班级管理"},
        {con:"阅卷管理"}
    ];
}

export default Question;