import {observable, action} from 'mobx'
import {login} from '../../service/index'
<<<<<<< HEAD
import {LoginForm} from '../../types/index'


class User{
    @observable isLogin: boolean = false;

    @action async login(form: any): Promise<any>{
        let result: any = await login(form);
        console.log('result...', result);
        return result.code;
=======
import {setToken, removeToken} from '../../utils/index'
import {HttpInfo, HttpType, LoginForm} from '../../types/index'
let account = {};
if (window.localStorage.getItem('account')){
    account = JSON.parse(window.localStorage.getItem('account')+'');
}
class User{
    @observable isLogin: boolean = false;
    @observable account: any = account;
    @action async login(form: any): Promise<any>{
        let result: any = await login(form);
        console.log('result...', result);
        if (result.code === 1){
            if (form.remember){
                window.localStorage.setItem('account', JSON.stringify(form));
            }else{
                window.localStorage.removeItem('account');
            }
            if (form.autoLogin){
                
                setToken(result.token);
            }
        }
        return result;
    }
    @action async logout():Promise<any>{
        removeToken();
>>>>>>> 9f23b233a9c4510d0254a29d26b5b07391ead148
    }
}

export default User;