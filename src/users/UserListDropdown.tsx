import { useContext, useEffect, useState } from 'react';
import { UserContext } from './UserContext';
import { IUser } from './userModel';
import { getUsers } from './userService';

interface IUserListDropdownProps {
  id: string;
  key?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  selectedId?: number | string;
}

function UserListDropdown(props: IUserListDropdownProps) {
  const [userList, setUserList] = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchUserList();
  }, []);

  const fetchUserList = async () => {
    setLoading(false);
    try {
      if (!userList.length) {
        const response = await getUsers();
        setUserList(response.data);
        setLoading(true);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <select
      key={props.key || 'user-list-dropdown'}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
    >
      {loading && (
        <option selected={!userList.length} value="0">
          Loading...
        </option>
      )}
      {userList.map((user: IUser) => (
        <option
          key={user.id}
          value={user.id}
          selected={props.selectedId === user.id}
        >
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default UserListDropdown;
