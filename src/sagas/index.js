import { call, delay, fork, put, select, take, takeEvery, takeLatest } from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import { AddTaskSuccess, AddTaskFailed, fetchListTask, fetchListTaskFailed, fetchListTaskSuccess, UpdateTaskFailed, UpdateTaskSuccess, DeleteTaskSuccess, DeleteTaskFailed } from '../actions/task';
import { STATUSES, STATUS_CODE } from '../constants';
import { hideLoading, showLoading } from './../actions/ui';
import { addTask, deleteTask, getList, updateTask } from './../apis/task';
import * as taskTypes from './../constants/task';


function* watchFetchListTaskAction() {
  while (true) {
    const action = yield take(taskTypes.FETCH_TASK);
    const { params } = action.payload;

    //dispatch loading
    yield put(showLoading());//non-blocking
    //gọi api
    const resp = yield call(getList, params);//gọi fc gọi api
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));//dispatch
    } else {
      yield put(fetchListTaskFailed(data));//dispatch
    }
    //chờ 1s loading
    yield delay(1000);//blocking
    yield put(hideLoading());
  }
}

function* filterTaskSaga({ payload }) {

  yield delay(500);
  const { keyword } = payload;
  yield put(fetchListTask({
    q: keyword
  }));
};

function* addTaskSaga(props) {

  const { title, description } = props.payload;
  yield put(showLoading());
  const resp = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value
  });
  const { data, status } = resp;
  if (status === STATUS_CODE.CREATED) {
    yield put(hideModal());
    yield put(AddTaskSuccess(data));
  } else {
    yield put(AddTaskFailed(data));
  }
  yield put(hideLoading());

}

function* updateTaskSaga({ payload }) {
  const { title, description, status } = payload;
  const taskEditing = yield select(state => state.task.taskEditing);
  yield put(showLoading());
  const resp = yield call(updateTask, { title, description, status }, taskEditing.id);
  if (resp.status === STATUS_CODE.SUCCESS) {
    yield put(UpdateTaskSuccess(resp.data));
  } else {
    yield put(UpdateTaskFailed(resp.data));
  }
  yield put(hideLoading());
};

function* deleteTaskSaga({ payload }) {
  console.log(payload);
  yield put(showLoading());
  const resp = yield call(deleteTask, payload);
  if (resp.status === STATUS_CODE.SUCCESS) {
    console.log(resp.data);
    yield put(DeleteTaskSuccess(resp.data));
    yield put(hideModal());
  } else {
    yield put(DeleteTaskFailed(resp.data));
  }
  yield delay(1000);
  yield put(hideLoading());
};

function* rootSaga() {
  yield fork(watchFetchListTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
  yield takeLatest(taskTypes.UPDATE_TASK, updateTaskSaga);
  yield takeLatest(taskTypes.DELETE_TASK, deleteTaskSaga);
}

export default rootSaga;

