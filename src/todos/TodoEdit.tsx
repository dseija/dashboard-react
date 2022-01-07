import { useState } from 'react';
import { getFormKey } from '../shared/utils/formatHelper';
import { Todo, TodoDefault } from './todoModel';
import TodoService from './todoService';

interface TodoEditProps {
  data: Todo;
  isNew?: boolean;
}

function TodoEdit(props: TodoEditProps = { data: TodoDefault, isNew: true }) {
  const service = new TodoService('todos', TodoDefault);

  const [todo, setTodo] = useState(props.data);
  const [loading, setLoading] = useState(false);

  const onChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const key = getFormKey(event.target.id, 'todo');
    setTodo({
      ...todo,
      [key]: event.target.value,
    });
  };

  const onSave: React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      if (props.isNew) {
        await service.create(todo);
      } else {
        await service.update(todo);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
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
        disabled={loading}
        value={loading ? 'Saving...' : 'Save'}
      />
    </form>
  );
}

export default TodoEdit;
