<<<<<<< HEAD
// 引入子模块
import User from './modules/user';
import Question from './modules/question';
// 实例化模块
const user = new User();
const question = new Question();

=======
import User from './modules/user';
import Question from './modules/question';
const user = new User();
const question = new Question();
>>>>>>> 9f23b233a9c4510d0254a29d26b5b07391ead148
export default {
    user,
    question
}