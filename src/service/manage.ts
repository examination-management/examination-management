import request from '../utils/request';
export let getstudent=()=>{
    return request.get("/manger/student")
}
export let getClassNo=(params:object)=>{
    console.log('getClassNo...')
    return request.get("/manger/grade",params)
}

export let newClass=(params:object)=>{
    console.log('newClass...')
    return request.get("/manger/grade/new",params)
}

export let addClassNo=(params:object)=>{
    console.log(params)
    return request.post("/manger/grade",params)
}
export let updateClassNo=(params:object)=>{
    console.log(params)
    return request.put("/manger/grade/update",params)
}

export let GradNew=(params:object)=>{
    return request.get("/manger/student/new",params)
}


//获取教室
export let GetclassRome=(params:object)=>{
    return request.get("/manger/room",params)
}
//添加教室
export let AddclassRome=(params:object)=>{
    return request.post("/manger/room",params)
}
//删除教室
export let GelclassRome=(params:object)=>{
    return request.post("/manger/room/delete",params)
}
