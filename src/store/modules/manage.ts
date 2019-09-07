import {observable,action} from "mobx"
import {getClassNo,addClassNo,GradNew,removeGradNew} from "../../service/manage"
console.log(getClassNo)
class Manage{
    @action async getStudent(params: any): Promise<any>{
        let result:any =await getClassNo(params)
        return result
    }
    @action async addStudent(params: any): Promise<any>{
        let result: any = await addClassNo(params);
        return result
    }
    @action async getGradNew(params: any): Promise<any>{
        let result: any = await GradNew(params);
        return result
    }
    @action async delGradNew(params: any): Promise<any>{
        let result: any = await removeGradNew(params);
        return result
    }
}
export default Manage
