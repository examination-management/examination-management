import axios from 'axios';
import {AxiosResponse} from 'axios/index';
import {HttpInfo} from '../types/index'
import {message} from 'antd';

const instance = axios.create({
    baseURL: 'http://169.254.169.33:7001',
    timeout: 1000,
    // headers: {'X-Custom-Header': 'foobar'}
});

// 请求拦截器
instance.interceptors.request.use( (config) =>{
    // Do something before request is sent
    return config;
  }, (error)=> {
    // Do something with request error
    return Promise.reject(error);
  }
);
 
// 响应拦截器
  instance.interceptors.response.use( (response: AxiosResponse<any>) =>{
    if (response.status !== 200){
      message.error(response.statusText);
    }
    console.log('response...', response);
    return response.data;
  },  (error) =>{
    if (error.response.status && error.response.status !== 200){
      message.error(error.response.statusText);
    }else{
    }
    console.log('error...', error);
    return Promise.resolve(error);
  }
);

export default instance;