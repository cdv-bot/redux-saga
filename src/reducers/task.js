import { toastError, toastSuccess } from '../helpers/toastHelper';
import * as taskConstants from './../constants/task';
const initialStale = { listTask: [], taskEditing: null };

const reducer = (state = initialStale, action) => {
  switch (action.type) {
    case taskConstants.FETCH_TASK:
      return {
        ...state,
        listTask: []
      };
    case taskConstants.FETCH_TASK_SUCCESS:
      const { data } = action.payload;
      return {
        ...state,
        listTask: data
      };
    case taskConstants.FETCH_TASK_FAILED:
      const { error } = action.payload;
      toastError(error);
      return {
        ...state,
        listTask: []
      };
    case taskConstants.FILTER_TASK_SUCCESS: {
      const { data } = action.payload;
      console.log(data);
      return {
        ...state,
        listTask: data
      }
    }

    case taskConstants.ADD_TASK: {
      return {
        ...state
      };
    }

    case taskConstants.ADD_TASK_SUCCESS: {
      // payload từ action gửi qua
      toastSuccess('Thêm mới thành công !!!');
      const data = action.payload;
      return {
        ...state,
        //thêm vào listTask để hiện lên màn hình
        listTask: [...state.listTask, data]
      };
    }

    case taskConstants.ADD_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state
      };
    }

    case taskConstants.SET_TASK_EDITTING: {
      const { task } = action.payload;
      return {
        ...state,
        taskEditing: task
      };
    }
    case taskConstants.UPDATE_TASK_SUCCESS: {
      toastSuccess('Cập nhật thành công !!!');
      const { id } = action.payload;
      const { listTask } = state;
      const index = listTask.findIndex(item => item.id === id);
      if (index !== -1) {
        const newList = [
          ...listTask.slice(0, index),
          action.payload,
          ...listTask.slice(index + 1)
        ];
        return {
          ...state,
          listTask: newList
        };
      } else {
        return {
          ...state
        };
      }
    }

    case taskConstants.UPDATE_TASK_FAILED: {
      const { error } = action.payload;
      toastError(error);
      return {
        ...state
      };
    }

    case taskConstants.DELETE_TASK: {
      return {
        ...state
      };
    }

    case taskConstants.DELETE_TASK_SUCCESS: {
      toastSuccess('Xóa thành công !!!');
      const arrList = state.listTask.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        listTask: [...arrList]
      };
    }

    default:
      return state;
  }
};

export default reducer;
