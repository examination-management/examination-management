import User from './modules/user';
import Question from './modules/question';
import Manage from "./modules/manage"
const user = new User();
const question = new Question();
const manage=new Manage()
export default {
    user,
    question,
    manage
}