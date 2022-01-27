import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import {
  RouteName,
  RoutePath,
  ROUTE_NAME,
  ROUTE_PATH,
} from '../shared/constants/route';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';

interface IRouterRoute {
  name: RouteName;
  path: RoutePath;
  element: JSX.Element;
}

function AppRoutes() {
  const routes: IRouterRoute[] = [
    { name: ROUTE_NAME.HOME, path: ROUTE_PATH.HOME, element: <Home /> },
    { name: ROUTE_NAME.USERS, path: ROUTE_PATH.USERS, element: <Users /> },
    { name: ROUTE_NAME.TODOS, path: ROUTE_PATH.TODOS, element: <Todos /> },
    { name: ROUTE_NAME.TODO, path: ROUTE_PATH.TODO, element: <Todo /> },
  ];

  return (
    <Routes>
      {routes.map((route) => (
        <Route
          key={`route_${route.name}`}
          path={route.path}
          element={route.element}
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
