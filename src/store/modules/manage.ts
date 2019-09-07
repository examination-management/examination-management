import {observable,action} from "mobx"
<<<<<<< HEAD
// import {getstudent} from "../../service/manage"
class Manage{
    // @action async getstudent(){
    //     let result:any =await getstudent()
    //     return result
    // }
=======
import {getstudent} from "../../service/manage"
class Manage{
    @action async getstudent(){
        let result:any =await getstudent()
        return result
    }
>>>>>>> f98e71c9869f4ff3145459a0d8c0b86b26ee24fe
}
export default Manage
