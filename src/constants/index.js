import AdminHomePage from "../AdminHomePage";
import LoginPage from "../components/LoginPage";
import SignupPage from "../components/SignupPage";
import Taskboard from './../Taskboard';
export const API_ENDPOINT = 'http://localhost:3000';
export const STATUSES = [
  {
    value: 0,
    label: "READY"
  },
  {
    value: 1,
    label: "IN PROGRESS"
  },
  {
    value: 2,
    label: "COMPLETED"
  },
];


export const STATUS_CODE = {
  SUCCESS: 200,
  CREATED: 201,
  UPDATED: 202
};


export const ADMIN_ROUTER = [
  {
    path: '/admin',
    name: 'Trang quản trị',
    exact: true,
    component: AdminHomePage
  },
  {
    path: '/admin/task-board',
    name: 'Quản lý công việc',
    component: Taskboard
  }
];

export const ROUTES = [
  {
    name: 'Đăng nhập',
    path: '/login',
    component: LoginPage
  },
  {
    name: 'Đăng ký',
    path: '/signup',
    component: SignupPage
  }
];
