import {
  requestCreate,
  requestGet,
  requestGetAll,
  requestRemove,
  requestUpdate,
} from '../shared/services/requestService';
import { IUser } from './userModel';

const serviceName = 'users';

// const UserService = defaultRequestService('users', UserDefault);

// export default UserService;

export const getUsers = () => requestGetAll(serviceName);
export const getUser = (id: number | string) => requestGet(serviceName, id);
export const createUser = (data: IUser) => requestCreate(serviceName, data);
export const updateUser = (data: IUser) => requestUpdate(serviceName, data);
export const removeUser = (id: number | string) =>
  requestRemove(serviceName, id);
