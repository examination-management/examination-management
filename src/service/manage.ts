import request from '../utils/request';
<<<<<<< HEAD

=======
export let getstudent=()=>{
    return request.get("/manger/student")
}
>>>>>>> 88e6ccfa2b2fd1ab0713f08fe788fae45de85cb1
export let getClassNo=(params:object)=>{
    return request.get("/manger/grade",params)
}

export let addClassNo=(params:object)=>{
    console.log(params)
    return request.post("/manger/grade",params)
}

export let GradNew=(params:object)=>{
    return request.get("/manger/student/new",params)
<<<<<<< HEAD
}
export let removeGradNew=(params:object)=>{
    return request.delete("/manger/room/delete",params)
=======
>>>>>>> 88e6ccfa2b2fd1ab0713f08fe788fae45de85cb1
}