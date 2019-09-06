<<<<<<< HEAD
import {observable,action} from "mobx"
import {getstudent} from "../../service/manage"
class Manage{
    @action async getstudent(){
        let result:any =await getstudent()
        return result
    }
}
export default Manage
=======
import {observable, action} from 'mobx'
import {manage} from '../../service/index'

class ClassNo{
    @action async getClassNo(params: any): Promise<any>{
        let result: any = await manage(params);
        return result
    }
  
}

export default Question;
>>>>>>> luxuan
