import User from './modules/user';
import Question from './modules/question';
import Manage from './modules/manage';
// import ClassNo from './modules'
const user = new User();
const question = new Question();
const classNo = new Manage();
export default {
    user,
    question,
    classNo
}