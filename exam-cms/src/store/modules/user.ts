import {observable, action} from 'mobx'
import {login} from '../../service/index'
import {LoginForm} from '../../types/index'


class User{
    @observable isLogin: boolean = false;

    @action async login(form: any): Promise<any>{
        let result: any = await login(form);
        console.log('result...', result);
        return result.code;
    }
}

export default User;