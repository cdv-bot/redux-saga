import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from './commons/Layout/AdminLayoutRoute';
import DefaultLayoutRoute from './commons/Layout/DefaultLayoutRoute';
import theme from './commons/Theme';
import GlobalLoading from './components/globalLoading';
import Modal from './components/Modal';
import { ADMIN_ROUTER, ROUTES } from './constants';
import configureStore from './redux/configureStore';

function App() {
  const store = configureStore();
  const adminRoute = () => {
    let xhtml = null;
    xhtml = ADMIN_ROUTER.map((route, index) => {
      return (
        <AdminLayoutRoute
          key={index}
          name={route.name}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      );
    });
    return xhtml;
  };

  const LoginPage = () => {
    console.log('a');
    let xhtml = null;
    xhtml = ROUTES.map((route, index) => {
      return (
        <DefaultLayoutRoute
          key={index}
          name={route.name}
          component={route.component}
          exact={route.exact}
          path={route.path}
        />
      );
    });

    return xhtml;
  };

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <ToastContainer />
          <Modal />
          <GlobalLoading />
          <Switch>
            {adminRoute()}
            {LoginPage()}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
