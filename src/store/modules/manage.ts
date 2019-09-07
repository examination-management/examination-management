import {observable,action} from "mobx"
import {getstudent} from "../../service/manage"
class Manage{
    @action async getstudent(){
        let result:any =await getstudent()
        return result
    }
}
export default Manage