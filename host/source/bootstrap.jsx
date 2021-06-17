// import { hot } from 'react-hot-loader/root';
import React from 'react';
import ReactDom from 'react-dom';
import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';
import App from './Application/Routing';

Sentry.init({
  dsn: 'https://8445e412ef2c43c8b7c8b776cffd902c@o859713.ingest.sentry.io/5820767',
  integrations: [new Integrations.BrowserTracing()],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

// const HotApp = hot(App);
ReactDom.render(<App />, document.getElementById('app'));
