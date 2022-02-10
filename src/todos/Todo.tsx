import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormKey } from '../shared/utils/formatHelper';
import { getInputValue } from '../shared/utils/inputHelper';
import UserListDropdown from '../users/UserListDropdown';
import { TodoContext } from './TodoContext';
import { ITodo, TodoDefault } from './todoModel';
import { createTodo, getTodo, removeTodo, updateTodo } from './todoService';

function Todo() {
  const params = useParams();

  const [todoList, setTodoList] = useContext(TodoContext);
  const [todo, setTodo] = useState<ITodo>(TodoDefault);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

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
      setTodoList([...todoListCopy]);
    } catch (error) {
      console.error(error);
    }
    setSaving(false);
  };

  const onDelete: React.MouseEventHandler<HTMLInputElement> = async (event) => {
    event.preventDefault();
    if (!todo.id) return;
    setDeleting(true);
    try {
      await removeTodo(todo.id);
      const todoListCopy = [...todoList];
      todoListCopy.splice(
        todoList.findIndex((todoItem: ITodo) => todoItem.id === todo.id),
        1
      );
      setTodoList([...todoListCopy]);
    } catch (error) {
      console.error(error);
    }
    setDeleting(false);
  };

  return (
    <section className="bg-white m-6 p-6 rounded-md shadow">
      {loading && <p>Loading Todo...</p>}
      <form onSubmit={onSave}>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-6">
            <label
              htmlFor="todo-title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              className="mt-1 px-3 py-2 block w-full shadow-sm text-sm border border-gray-300 rounded-md focus:outline-none focus:border-blue-600"
              type="text"
              name="todo-title"
              id="todo-title"
              onChange={onChange}
              value={todo.title}
            />
          </div>
          <div className="col-span-6 flex items-center">
            <input
              className="h-4 w-4 text-blue-600 border border-gray-300 rounded"
              type="checkbox"
              name="todo-completed"
              id="todo-completed"
              onChange={onChange}
              checked={todo.completed}
            ></input>
            <label
              htmlFor="todo-completed"
              className="ml-3 block text-sm font-medium text-gray-700"
            >
              Completed
            </label>
          </div>
          <div className="col-span-6">
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
              type="button"
              disabled={deleting}
              value={deleting ? 'Deleting...' : 'Delete'}
              onClick={onDelete}
            />
            <input
              type="submit"
              disabled={saving}
              value={saving ? 'Saving...' : 'Save'}
            />
          </div>
        </div>
      </form>
    </section>
  );
}

export default Todo;
