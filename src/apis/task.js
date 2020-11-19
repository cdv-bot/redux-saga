import axiosService from '../commons/axiosService';
import { API_ENDPOINT } from './../constants';
import qs from 'query-string';

const url = 'tasks';

export const getList = (params = {}) => {
  let queryPargrams = '';
  if (Object.keys(params).length > 0) {
    queryPargrams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryPargrams}`);
};

//.../tasks method: post
export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, data);
}
//put
export const updateTask = (data, taskId) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${taskId}`, data);
}

//delete
export const deleteTask = (id) => {
  return axiosService.put(`${API_ENDPOINT}/${url}/${id}`);
}


