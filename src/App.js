import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLayoutRoute from './commons/Layout/AdminLayoutRoute';
import theme from './commons/Theme';
import GlobalLoading from './components/globalLoading';
import Modal from './components/Modal';
import { ADMIN_ROUTER } from './constants';
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

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme} >
          <ToastContainer />
          <Switch>
            {adminRoute()}
          </Switch>
          <Modal />
          <GlobalLoading />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>

  );
}

export default App;
