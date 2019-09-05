import request from '../utils/request';
<<<<<<< HEAD

// 登陆
=======
>>>>>>> 9f23b233a9c4510d0254a29d26b5b07391ead148
export let login = (params: object)=>{
    return request.post('/user/login', params);
}