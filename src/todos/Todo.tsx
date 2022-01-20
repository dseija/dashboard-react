import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormKey } from '../shared/utils/formatHelper';
import { getInputValue } from '../shared/utils/inputHelper';
import UserListDropdown from '../users/UserListDropdown';
import { TodoContext } from './TodoContext';
import { ITodo, TodoDefault } from './todoModel';
import { createTodo, getTodo, updateTodo } from './todoService';

function Todo() {
  const params = useParams();

  const [todoList, setTodoList] = useContext(TodoContext);
  const [todo, setTodo] = useState<ITodo>(TodoDefault);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getTodoData();
  }, []);

  const getTodoData = async () => {
    setLoading(true);
    try {
      if (params.todoId && params.todoId !== 'new') {
        const response = await getTodo(params.todoId);
        setTodo(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const key = getFormKey(event.target.id, 'todo');
    setTodo({
      ...todo,
      [key]: getInputValue(event.target),
    });
  };

  const onSave: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setSaving(true);
    const todoData: ITodo = { ...todo, userId: Number(todo.userId) };
    let todoListCopy = [...todoList];
    try {
      if (params.todoId === 'new') {
        await createTodo(todoData);
        todoListCopy = [...todoListCopy, todoData];
      } else {
        await updateTodo(todoData);
        todoListCopy.splice(
          todoList.findIndex((todoItem: ITodo) => todoItem.id === todoData.id),
          1,
          todoData
        );
      }
      console.log('todoListCopy', todoListCopy);
      setTodoList([...todoListCopy]);
    } catch (error) {
      console.error(error);
    }
    setSaving(false);
  };

  return (
    <div>
      {loading && <p>Loading Todo...</p>}
      <form onSubmit={onSave}>
        <div>
          <label>Title</label>
          <input
            type="text"
            name="todo-title"
            id="todo-title"
            onChange={onChange}
            value={todo.title}
          />
        </div>
        <div>
          <label>Completed</label>
          <input
            type="checkbox"
            name="todo-completed"
            id="todo-completed"
            onChange={onChange}
            checked={todo.completed}
          ></input>
        </div>
        <div>
          <label>User</label>
          <UserListDropdown
            id="todo-userId"
            name="todo-userId"
            onChange={onChange}
            userId={todo.userId}
          />
        </div>
        <div>
          <input
            type="submit"
            disabled={saving}
            value={saving ? 'Saving...' : 'Save'}
          />
        </div>
      </form>
    </div>
  );
}

export default Todo;
