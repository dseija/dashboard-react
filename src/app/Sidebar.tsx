import { NavLink } from 'react-router-dom';
import { DocumentTextIcon, HomeIcon, UserIcon } from '@heroicons/react/outline';
import {
  RoutePath,
  RouteText,
  ROUTE_PATH,
  ROUTE_TEXT,
} from '../shared/constants/route';

interface IRouteLink {
  icon: JSX.Element;
  path: RoutePath;
  text: RouteText;
}

function Sidebar() {
  const iconClass = 'h-6 w-6';

  const links: IRouteLink[] = [
    {
      path: ROUTE_PATH.HOME,
      text: ROUTE_TEXT.HOME,
      icon: <HomeIcon className={iconClass} />,
    },
    {
      path: ROUTE_PATH.USERS,
      text: ROUTE_TEXT.USERS,
      icon: <UserIcon className={iconClass} />,
    },
    {
      path: ROUTE_PATH.TODOS,
      text: ROUTE_TEXT.TODOS,
      icon: <DocumentTextIcon className={iconClass} />,
    },
  ];

  return (
    <nav className="bg-gray-700 w-48 text-white">
      {links.map((link) => (
        <NavLink
          key={`link_${link.text}`}
          className={({ isActive }) =>
            `flex py-4 px-6 cursor-pointer ${
              isActive
                ? 'bg-gray-800 border-r-4 border-blue-600'
                : 'hover:bg-blue-600'
            }`
          }
          to={link.path}
        >
          <span className="icon mr-2">{link.icon}</span>
          <span className="text">{link.text}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default Sidebar;
