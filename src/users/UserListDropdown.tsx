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
    setLoading(true);
    try {
      if (!userList.length) {
        const response = await getUsers();
        setUserList(response.data);
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <select
      key={props.key || 'user-list-dropdown'}
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      value={props.selectedId}
    >
      {loading && <option value="0">Loading...</option>}
      {userList.map((user: IUser) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
}

export default UserListDropdown;
