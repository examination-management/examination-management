import {observable, action} from 'mobx'
<<<<<<< HEAD



class Question{
    // @observable slidList:Array<object>= [
    //     {con:"试题管理",children:["添加试题","试题分类","查看试题"]},
    //     {con:"用户管理"},
    //     {con:"考试管理"},
    //     {con:"班级管理"},
    //     {con:"阅卷管理"}
    // ];
    // @observable num=0
    
=======
import {getQuestion} from '../../service/index'

class Question{
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        console.log('question...', result);
        // return result
    }
>>>>>>> 9f23b233a9c4510d0254a29d26b5b07391ead148
}

export default Question;