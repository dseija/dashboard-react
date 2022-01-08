import { useState } from 'react';
import { contextGenerator } from '../shared/utils/contextHelper';
import { ITodo } from './todoModel';

const defaultValue: ITodo[] = [];
export const TodoContext = contextGenerator(defaultValue);

const TodoProvider = (props: any) => {
  const [todoList, setTodoList] = useState<ITodo[]>(defaultValue);

  return (
    <TodoContext.Provider value={[todoList, setTodoList]}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
