import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <ul>
      <li>
        <Link className="text-gray-700 block px-4 py-2 text-sm" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="text-gray-700 block px-4 py-2 text-sm" to="/users">
          Users
        </Link>
      </li>
      <li>
        <Link className="text-gray-700 block px-4 py-2 text-sm" to="/todos">
          Todos
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
