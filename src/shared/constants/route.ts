export enum ROUTE_NAME {
  HOME = 'home',
  USERS = 'users',
  TODOS = 'todos',
  TODO = 'todo',
}
export type RouteName = ROUTE_NAME;

export enum ROUTE_PATH {
  HOME = '/',
  USERS = '/users',
  TODOS = '/todos',
  TODO = '/todos/:todoId',
}
export type RoutePath = ROUTE_PATH;

export enum ROUTE_TEXT {
  HOME = 'Home',
  USERS = 'Users',
  TODOS = 'Todos',
  TODO = 'Todo',
}
export type RouteText = ROUTE_TEXT;
