import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/request';

const requestHandler: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export function getAll(resourceName: string): Promise<AxiosResponse> {
  console.log('->getAll');
  return requestHandler.get(resourceName);
}

export function get(
  resourceName: string,
  id: number | string
): Promise<AxiosResponse> {
  console.log('->get');
  return requestHandler.get(`${resourceName}/${id}`);
}

export function create(
  resourceName: string,
  data: any = {}
): Promise<AxiosResponse> {
  return requestHandler.post(resourceName, data);
}

export function update(
  resourceName: string,
  data: any = {}
): Promise<AxiosResponse> {
  return requestHandler.get(`${resourceName}/${data.id}`, data);
}

export function remove(
  resourceName: string,
  id: number | string
): Promise<AxiosResponse> {
  return requestHandler.delete(`${resourceName}/${id}`);
}

export function defaultRequestService(
  resourceName: string,
  defaultResourceValue: any
) {
  return {
    getAll: () => getAll(resourceName),
    get: (id: number | string) => get(resourceName, id),
    create: (data: typeof defaultResourceValue) => create(resourceName, data),
    update: (data: typeof defaultResourceValue) => update(resourceName, data),
    remove: (id: number | string) => remove(resourceName, id),
  };
}
