import { useState } from 'react';
import { contextGenerator } from '../shared/utils/contextHelper';
import { Todo } from './todoModel';

const defaultValue: Todo[] = [];
export const TodoContext = contextGenerator(defaultValue);

const TodoProvider = (props: any) => {
  const [todoList, setTodoList] = useState<Todo[]>(defaultValue);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
