import request from '../utils/request';
export let login = (params: object)=>{
    return request.post('/user/login', params);
}
export let getuserdata=()=>{
    return request.get("/user/user")//获取用户数据
}