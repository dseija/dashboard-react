import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormKey } from '../shared/utils/formatHelper';
import { UserContext } from '../users/UserContext';
import { getUsers } from '../users/userService';
import { ITodo, TodoDefault } from './todoModel';
import { createTodo, getTodo, updateTodo } from './todoService';

function Todo() {
  const params = useParams();
  const [userList, setUserList] = useContext(UserContext);
  const [todo, setTodo] = useState<ITodo>(TodoDefault);
  const [usersReady, setUsersReady] = useState(false);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getTodoData();
    fetchUserList();
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

  const fetchUserList = async () => {
    setUsersReady(false);
    try {
      if (!userList.length) {
        const response = await getUsers();
        setUserList(response.data);
        setUsersReady(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const key = getFormKey(event.target.id, 'todo');
    setTodo({
      ...todo,
      [key]: event.target.value,
    });
  };

  const onSave: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      if (params.todoId === 'new') {
        await createTodo(todo);
      } else {
        await updateTodo(todo);
      }
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
          <select name="todo-userId" id="todo-userId">
            {/* userList... */}
          </select>
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
