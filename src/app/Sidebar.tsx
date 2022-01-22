import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="app-sidebar">
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
  );
}

export default Sidebar;
