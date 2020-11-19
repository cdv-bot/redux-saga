import { ADD_TASK, ADD_TASK_FAILED, ADD_TASK_SUCCESS, DELETE_TASK, DELETE_TASK_FAILED, DELETE_TASK_SUCCESS, FETCH_TASK, FETCH_TASK_FAILED, FETCH_TASK_SUCCESS, FILTER_TASK, FILTER_TASK_SUCCESS, SET_TASK_EDITTING, UPDATE_TASK, UPDATE_TASK_FAILED, UPDATE_TASK_SUCCESS } from '../constants/task';
// import * as taskApis from './../apis/task';

export const fetchListTask = (params = {}) => {
  return {
    type: FETCH_TASK,
    payload: {
      params
    }
  }
};

export function fetchListTaskSuccess(data) {
  return {
    type: FETCH_TASK_SUCCESS,
    payload: { data }
  };
}

export const fetchListTaskFailed = error => {
  return {
    type: FETCH_TASK_FAILED,
    payload: { error }
  }
};

export const filterTask = keyword => ({
  type: FILTER_TASK,
  payload: {
    keyword
  }
});


export const filterTaskSuccess = data => ({
  type: FILTER_TASK_SUCCESS,
  payload: {
    data
  }
});


export const AddTask = (title, description) => {
  return {
    type: ADD_TASK,
    payload: {
      title,
      description
    }
  }
};

export function AddTaskSuccess(data) {
  return {
    type: ADD_TASK_SUCCESS,
    payload: data
  };
}

export const AddTaskFailed = error => {
  return {
    type: ADD_TASK_FAILED,
    payload: { error }
  }
};


export const setTaskEditing = task => {
  return {
    type: SET_TASK_EDITTING,
    payload: { task }
  }
};

export const UpdateTask = (title, description, status) => {
  return {
    type: UPDATE_TASK,
    payload: {
      title,
      description,
      status: Number(status)
    }
  }
};

export const UpdateTaskSuccess = data => {
  return {
    type: UPDATE_TASK_SUCCESS,
    payload: data
  };
}

export const UpdateTaskFailed = error => {
  return {
    type: UPDATE_TASK_FAILED,
    payload: { error }
  }
};

export const DeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
};

export const DeleteTaskSuccess = data => {
  return {
    type: DELETE_TASK_SUCCESS,
    payload: data
  };
}

export const DeleteTaskFailed = error => {
  return {
    type: DELETE_TASK_FAILED,
    payload: { error }
  }
};
