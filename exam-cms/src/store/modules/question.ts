import {observable, action} from 'mobx'
import {getQuestion} from '../../service/index'

class Question{
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        console.log('question...', result);
        // return result
    }
}

export default Question;