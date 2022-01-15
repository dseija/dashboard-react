import {
  requestCreate,
  requestGet,
  requestGetAll,
  requestRemove,
  requestUpdate,
} from '../shared/services/requestService';
import { ITodo } from './todoModel';

const serviceName = 'todos';

// const TodoService = defaultRequestService('todos', TodoDefault);
// const TodoService = {
//   getTodos: () => getAll('todos')
// };

// export default TodoService;

export const getTodos = () => requestGetAll(serviceName);
export const getTodo = (id: number | string) => requestGet(serviceName, id);
export const createTodo = (data: ITodo) => requestCreate(serviceName, data);
export const updateTodo = (data: ITodo) => requestUpdate(serviceName, data);
export const removeTodo = (id: number | string) =>
  requestRemove(serviceName, id);
