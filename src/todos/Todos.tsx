import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import TodoCard from './TodoCard';
import { Todo, TodoDefault } from './todoModel';
import TodoService from './todoService';

function Todos() {
  const service = new TodoService('todos', TodoDefault);

  const [todoList, setTodoList] = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      const response = await service.getAll();
      setTodoList(response.data);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!todoList.length) getTodos();
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      <ul>
        {todoList.map((todo: Todo) => (
          <li key={todo.id}>
            <TodoCard data={todo} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
