export interface ITodo {
  completed: boolean;
  id?: number;
  title: string;
  userId?: number;
}

export const TodoDefault: ITodo = {
  completed: false,
  title: '',
};
