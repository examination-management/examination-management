import {observable, action} from 'mobx'
import {getQuestion} from '../../service/index'

class Question{
    @action async getQuestion(params: any): Promise<any>{
        let result: any = await getQuestion(params);
        return result
    }
}

export default Question;