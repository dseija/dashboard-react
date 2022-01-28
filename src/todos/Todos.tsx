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
    <section className="p-6">
      {loading && <p>Loading Todos...</p>}
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {todoList.map((todo: ITodo) => (
          <li key={todo.id}>
            <Link to={`/todos/${todo.id}`} key={todo.id}>
              <TodoCard data={todo} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Todos;
