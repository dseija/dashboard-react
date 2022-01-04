import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './home/Home';
import Todos from './todos/Todos';
import Users from './users/Users';

function App() {
  return (
    <BrowserRouter>
      <div className="app-header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
          <li>
            <Link to="/todos">Todos</Link>
          </li>
        </ul>
      </div>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
