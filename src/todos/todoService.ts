import { defaultRequestService } from '../shared/services/requestService';
import { TodoDefault } from './todoModel';

const TodoService = defaultRequestService('todo', TodoDefault);
// const TodoService = {
//   getTodos: () => getAll('todos')
// };

export default TodoService;
