import { Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import { ROUTES, ROUTE_NAME } from '../shared/constants/route';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';

function AppRoutes() {
  const routeElements: { [prop: string]: JSX.Element } = {
    [ROUTE_NAME.HOME]: <Home />,
    [ROUTE_NAME.USERS]: <Users />,
    [ROUTE_NAME.TODOS]: <Todos />,
    [ROUTE_NAME.TODO]: <Todo />,
  };

  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route
          key={`route_${route.name}`}
          path={route.path}
          element={routeElements[route.name]}
        />
      ))}
    </Routes>
  );
}

export default AppRoutes;
