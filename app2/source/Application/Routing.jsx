import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import Welcome from './pages/WelcomeB';
import Album from './pages/Album';
import Base from './pages/Base';
import Pricing from './pages/Pricing';

export default function Routing() {
  return (
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
  );
}
