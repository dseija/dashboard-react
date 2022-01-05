export interface Todo {
  completed: boolean;
  id?: number;
  title: string;
  userId?: number;
}

export const TodoDefault: Todo = {
  completed: false,
  title: '',
};
