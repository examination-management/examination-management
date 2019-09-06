import request from '../utils/request';

export let getClassNo=(params:object)=>{
    return request.get("/manger/grade/new",params)
}