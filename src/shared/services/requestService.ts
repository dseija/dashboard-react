import axios from 'axios';
import { BASE_URL } from '../constants/request';

export default class RequestService {
  private handler;

  constructor(private resourceName: string, private defaultResourceValue: any) {
    this.handler = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-type': 'application/json',
      },
    });
  }

  getAll() {
    return this.handler.get(this.resourceName);
  }

  get(id: number | string) {
    return this.handler.get(`${this.resourceName}/${id}`);
  }

  create(data: typeof this.defaultResourceValue) {
    return this.handler.post(this.resourceName, data);
  }

  update(data: typeof this.defaultResourceValue) {
    return this.handler.put(`${this.resourceName}/${data.id}`, data);
  }

  remove(id: number | string) {
    return this.handler.delete(`${this.resourceName}/${id}`);
  }
}
