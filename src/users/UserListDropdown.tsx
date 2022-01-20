import { useContext, useEffect, useState } from 'react';
import Dropdown from '../shared/components/dropdown/Dropdown';
import { UserContext } from './UserContext';
import { IUser } from './userModel';
import { getUsers } from './userService';

interface IUserListDropdownProps {
  id: string;
  key?: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>;
  userId?: number | string;
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
    <Dropdown
      id={props.id}
      name={props.name}
      onChange={props.onChange}
      items={userList.map((user: IUser) => ({
        value: user.id,
        text: user.name,
      }))}
      selectedItem={props.userId}
    />
  );
}

export default UserListDropdown;
