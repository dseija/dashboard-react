import { NavLink } from 'react-router-dom';
import { DocumentTextIcon, HomeIcon, UserIcon } from '@heroicons/react/outline';

function Sidebar() {
  const links: { route: string; text: string; icon?: JSX.Element }[] = [
    { route: '/', text: 'Home', icon: <HomeIcon className="h-6 w-6" /> },
    { route: '/users', text: 'Users', icon: <UserIcon className="h-6 w-6" /> },
    {
      route: '/todos',
      text: 'Todos',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
  ];

  return (
    <nav className="bg-gray-700 w-48 text-white">
      {links.map((link) => (
        <NavLink
          className={({ isActive }) =>
            `flex py-4 px-6 cursor-pointer ${
              isActive
                ? 'bg-gray-800 border-r-4 border-blue-600'
                : 'hover:bg-blue-600'
            }`
          }
          to={link.route}
        >
          <span className="icon mr-2">{link.icon}</span>
          <span className="text">{link.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar;
