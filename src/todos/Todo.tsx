import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFormKey } from '../shared/utils/formatHelper';
import { ITodo, TodoDefault } from './todoModel';
import TodoService from './todoService';

function Todo() {
  const params = useParams();
  const [todo, setTodo] = useState<ITodo>(TodoDefault);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    getTodo();
  }, []);

  const getTodo = async () => {
    setLoading(true);
    try {
      if (params.todoId && params.todoId !== 'new') {
        const response = await TodoService.get(params.todoId);
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
      [key]: event.target.value,
    });
  };

  const onSave: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setSaving(true);
    try {
      if (params.todoId === 'new') {
        await TodoService.create(todo);
      } else {
        await TodoService.update(todo);
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
        <input
          type="submit"
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
        />
      </form>
    </div>
  );
}

export default Todo;
