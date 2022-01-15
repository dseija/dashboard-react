import React, { useContext, useEffect, useState } from 'react';
import { TodoContext } from './TodoContext';
import TodoCard from './TodoCard';
import { ITodo } from './todoModel';
import { getTodos } from './todoService';
import { Link } from 'react-router-dom';

function Todos() {
  const [todoList, setTodoList] = useContext(TodoContext);
  const [loading, setLoading] = useState(false);

  const fetchTodoList = async () => {
    setLoading(true);
    try {
      const response = await getTodos();
      setTodoList(response.data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!todoList.length) fetchTodoList();
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
