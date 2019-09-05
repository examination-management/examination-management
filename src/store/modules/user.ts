import {observable, action} from 'mobx'
import {login} from '../../service/index'
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
    }
}

export default User;