import { useState } from 'react';
import { contextGenerator } from '../shared/utils/contextHelper';
import { IUser } from './userModel';

const defaultValue: IUser[] = [];
export const UserContext = contextGenerator(defaultValue);

const UserProvider = (props: any) => {
  const [userList, setUserList] = useState<IUser[]>(defaultValue);

  return (
    <UserContext.Provider value={[userList, setUserList]}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserProvider;
