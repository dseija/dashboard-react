import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import TodoProvider from '../todos/TodoContext';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';
import Sidebar from './Sidebar';
import UserProvider from '../users/UserContext';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />

      <hr />

      <UserProvider>
        <TodoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Users />} />
            <Route path="/todos" element={<Todos />}></Route>
            <Route path="/todos/:todoId" element={<Todo />} />
          </Routes>
        </TodoProvider>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
