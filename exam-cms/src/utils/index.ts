import * as Cookie from 'js-cookie';

const key = 'authorization';
export let getToken: ()=>any = ()=>{
    console.log(Cookie.get(key),'get key-----')
    return Cookie.get(key);
};

export let setToken: (val: string)=>void = (val)=>{
    console.log(val,'token..value...')
    Cookie.set(key, val, { expires: 7 });
};

export let removeToken: ()=>void = ()=>{
    Cookie.remove(key);
};