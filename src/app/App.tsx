import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../home/Home';
import TodoProvider from '../todos/TodoContext';
import Todo from '../todos/Todo';
import Todos from '../todos/Todos';
import Users from '../users/Users';
import Sidebar from './Sidebar';
import UserProvider from '../users/UserContext';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col h-screen">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <section className="flex flex-1 overflow-y-auto">
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
          </section>
        </div>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
