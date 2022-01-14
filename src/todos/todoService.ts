import { defaultRequestService } from '../shared/services/requestService';
import { TodoDefault } from './todoModel';

const TodoService = defaultRequestService('todos', TodoDefault);
// const TodoService = {
//   getTodos: () => getAll('todos')
// };

export default TodoService;
