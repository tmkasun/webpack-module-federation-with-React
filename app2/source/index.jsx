import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import theme from './Application/theme/theme';
import App from './Application/Routing';

const StyledApp = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
const HotApp = hot(StyledApp);
ReactDom.render(<HotApp />, document.getElementById('app'));
