import {observable,action} from "mobx"
import {getstudent,getClassNo,addClassNo,GradNew,updateClassNo,newClass,GetclassRome,AddclassRome,GelclassRome} from "../../service/manage"
class Manage{
    @action async getstudent(){
        let result:any =await getstudent()
        return result
    }
    //获取所有
    @action async getStudent(params: any): Promise<any>{
        let result:any =await getClassNo(params)
        return result
    }
    //添加班级
    @action async addStudent(params: any): Promise<any>{

        let result: any = await addClassNo(params);
        return result
    }
    //更新班级
    @action async updateClass(params: any): Promise<any>{
        let result: any = await updateClassNo(params);
        return result
    }
    //
    @action async getGradNew(params: any): Promise<any>{
        let result: any = await GradNew(params);
        return result
    }
    //未分配班级
    @action async NewClass(params: any): Promise<any>{
        let result: any = await newClass(params);
        return result
    }
    

    //教室
    @action async getClassRome(params: any): Promise<any>{
        let result: any = await GetclassRome(params);
        return result
    }
    //添加教室
    @action async addclassRome(params: any): Promise<any>{
        let result: any = await AddclassRome(params);
        return result
    }
      //删除教室
      @action async gelclassRome(params: any): Promise<any>{
        let result: any = await GelclassRome(params);
        return result
    }
}
export default Manage
