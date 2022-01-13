import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import TodoProvider from '../todos/TodoContext';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />

      <hr />

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
    </BrowserRouter>
  );
}

export default App;
