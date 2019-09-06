import request from '../utils/request';
<<<<<<< HEAD
export let getstudent=()=>{
    return request.get("/manger/student")
=======

export let getClassNo=(params:object)=>{
    return request.get("/manger/grade/new",params)
>>>>>>> luxuan
}