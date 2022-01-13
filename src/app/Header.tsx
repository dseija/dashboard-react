import { Link } from 'react-router-dom';

function Header() {
  return (
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
  );
}

export default Header;
