import React, { useContext, useEffect } from 'react';
import { TodoContext } from './TodoContext';
import { Todo } from './todoModel';

function Todos() {
  const [todoList, setTodoList] = useContext(TodoContext);

  const getTodos = () => {
    setTodoList([
      {
        userId: 1,
        id: 1,
        title: 'delectus aut autem',
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: 'quis ut nam facilis et officia qui',
        completed: false,
      },
      {
        userId: 1,
        id: 3,
        title: 'fugiat veniam minus',
        completed: false,
      },
      {
        userId: 1,
        id: 4,
        title: 'et porro tempora',
        completed: true,
      },
    ]);
  };

  useEffect(() => {
    if (!todoList.length) getTodos();
  }, []);

  return (
    <ul>
      {todoList.map((todo: Todo) => (
        <li key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Status: {todo.completed ? 'Completed' : 'Pending'}</p>
        </li>
      ))}
    </ul>
  );
}

export default Todos;
