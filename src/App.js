import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import theme from './commons/Theme';
import Taskboard from './Taskboard';

function App() {
  return (
    <ThemeProvider theme={theme} >
      <Taskboard />
    </ThemeProvider>
  );
}

export default App;
