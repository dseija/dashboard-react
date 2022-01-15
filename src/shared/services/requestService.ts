import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { BASE_URL } from '../constants/request';

const requestHandler: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export function requestGetAll(resourceName: string): Promise<AxiosResponse> {
  return requestHandler.get(resourceName);
}

export function requestGet(
  resourceName: string,
  id: number | string
): Promise<AxiosResponse> {
  return requestHandler.get(`${resourceName}/${id}`);
}

export function requestCreate(
  resourceName: string,
  data: any = {}
): Promise<AxiosResponse> {
  return requestHandler.post(resourceName, data);
}

export function requestUpdate(
  resourceName: string,
  data: any = {}
): Promise<AxiosResponse> {
  return requestHandler.get(`${resourceName}/${data.id}`, data);
}

export function requestRemove(
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
    getAll: () => requestGetAll(resourceName),
    get: (id: number | string) => requestGet(resourceName, id),
    create: (data: typeof defaultResourceValue) =>
      requestCreate(resourceName, data),
    update: (data: typeof defaultResourceValue) =>
      requestUpdate(resourceName, data),
    remove: (id: number | string) => requestRemove(resourceName, id),
  };
}
