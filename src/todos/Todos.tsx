import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import TodoCard from './TodoCard';
import { ITodo, TodoDefault } from './todoModel';
import TodoService from './todoService';
import { Link, Outlet } from 'react-router-dom';

function Todos() {
  const service = new TodoService('todos', TodoDefault);

  const [todoList, setTodoList] = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const getTodos = async () => {
    setLoading(true);
    try {
      const response = await service.getAll();
      setTodoList(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!todoList.length) getTodos();
  }, []);

  return (
    <div>
      {loading && <p>Loading Todos...</p>}
      <ul>
        {todoList.map((todo: ITodo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              <TodoCard data={todo} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
