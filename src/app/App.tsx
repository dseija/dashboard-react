import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import TodoProvider from '../todos/TodoContext';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';
import Header from './Header';
import UserProvider from '../users/UserContext';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <hr />

      <UserProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route
            path="/todos"
            element={
              <TodoProvider>
                <Todos />
              </TodoProvider>
            }
          ></Route>
          <Route path="/todos/:todoId" element={<Todo />} />
        </Routes>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
