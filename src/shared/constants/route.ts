interface IRoute {
  name: string;
  path: string;
}

export enum ROUTE_NAME {
  HOME = 'home',
  USERS = 'users',
  TODOS = 'todos',
  TODO = 'todo',
}

export const ROUTES: IRoute[] = [
  { name: ROUTE_NAME.HOME, path: '/' },
  { name: ROUTE_NAME.USERS, path: '/users' },
  { name: ROUTE_NAME.TODOS, path: '/todos' },
  { name: ROUTE_NAME.TODO, path: '/todos/:todoId' },
];
