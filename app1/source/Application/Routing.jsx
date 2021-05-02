// eslint-disable-next-line no-unused-vars
import React, { lazy, Suspense } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';

// eslint-disable-next-line import/no-unresolved
// import SayHelloFromB from 'application_b/SayHelloFromB';

import Welcome from './pages/Welcome';
import Album from './pages/Album';
import Base from './pages/Base';
import Pricing from './pages/Pricing';
import Signup from './pages/Signup';
import theme from './theme/theme';

const App2Welcome = lazy(() => import('application_b/SayHelloFromB'));

export default function Routing() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Base>
          <Switch>
            <Route exact path="/welcome">
              <Welcome />
            </Route>
            {/* If the current URL is /about, this route is rendered
            while the rest are ignored */}
            <Route path="/about">
              <Album />
            </Route>
            <Route path="/pricing">
              <Pricing />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/mf">
              {/* <SayHelloFromB /> */}
              <Suspense fallback="Loading . . . ">
                <App2Welcome title="Prop from master app" />
              </Suspense>
            </Route>
            {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
            <Route exact path="/">
              <Welcome />
            </Route>
          </Switch>
        </Base>
      </ThemeProvider>
    </BrowserRouter>
  );
}