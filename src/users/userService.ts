import { defaultRequestService } from '../shared/services/requestService';
import { UserDefault } from './userModel';

const UserService = defaultRequestService('users', UserDefault);

export default UserService;
