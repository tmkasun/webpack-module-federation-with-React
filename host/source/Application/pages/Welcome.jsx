/* eslint-disable no-unused-vars */
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
// eslint-disable-next-line no-unused-vars
import React, {
  lazy, Suspense, useEffect, useState,
} from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import WidgetsIcon from '@material-ui/icons/Widgets';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import DemoProgress from './components/DemoProgress';

export default function StickyFooter() {
  const [RemoteComponent, setRemoteComponent] = useState(null);
  const [componentState, setComponentState] = useState(null);
  const [mountState, setMountState] = useState(null);
  const handleClick = () => {
    if (RemoteComponent) {
      window.location = '/';
    } else {
      setRemoteComponent(lazy(() => import('application_b/SayHelloFromB')));
    }
  };
  const SuspenseFallback = () => {
    useEffect(() => {
      setComponentState({ inProgress: true });
      return () => {
        setComponentState({ completed: true, inProgress: false });
        setMountState({ inProgress: true });
        setTimeout(() => {
          setMountState({ completed: true, inProgress: false });
        }, 500);
      };
    }, []);
    return 'Loading from `https://knnect-mf-app2.netlify.app/` . . . ';
  };
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello from
        {' '}
        <Box display="inline" color="info.main"> Host </Box>
        {' '}
        application
      </Typography>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="flex-start"
        spacing={2}
      >
        <Grid item xs={6}>
          <Box height={250} p={2} borderRadius="borderRadius" border={1} borderColor="primary.main">

            <Typography variant="body1">
              This app demonstrate how we can use
              {' '}
              <Link underline="none" href="https://webpack.js.org/concepts/module-federation/">
                <b>Webpack 5 module federation</b>
              </Link>
              {' '}
              to decouple large monolithic application into
              a set of Micro Frontends.
              <br />
              <br />
              Useful links
            </Typography>
            <Box mt={2}>
              <ul>
                <li>
                  <Link underline="none" href="https://webpack.js.org/concepts/module-federation/">
                    <b>Webpack 5 module federation</b>
                  </Link>
                </li>
                <li>
                  <Link underline="none" href="https://github.com/tmkasun/webpack-module-federation-with-React">
                    <b>Github repo</b>
                  </Link>
                </li>

                <li>
                  <Link underline="none" href="https://github.com/module-federation/module-federation-examples/tree/master/basic-host-remote">
                    <b>Basic Host-Remote example</b>
                  </Link>
                </li>
              </ul>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box height={250} p={1} borderRadius="borderRadius" border={1} borderColor="primary.main">
            <DemoProgress mount={mountState} component={componentState} />
          </Box>
        </Grid>

      </Grid>

      <Box display="flex" alignItems="center" mt={5}>
        <Button style={{ width: 200 }} onClick={handleClick} variant="outlined" color="secondary" size="large">
          {RemoteComponent ? 'Refresh' : 'DEMO'}
        </Button>
        <Box ml={1}>
          Or click on
          {' '}
          <WidgetsIcon fontSize="small" />
          {' '}
          in left menu
        </Box>
      </Box>

      <Box height={20} color="text.secondary" display="flex" mt={1}>
        {!RemoteComponent && ('Open the Browser network panel to see related network activities')}
      </Box>

      <Box
        display="flex"
        justifyContent="center"
        height={400}
        p={1}
        borderRadius="borderRadius"
        border={1}
        borderColor="secondary.main"
        mt={5}
      >
        {RemoteComponent ? (
          <Suspense fallback={<SuspenseFallback />}>
            <RemoteComponent title="Prop from host app" />
          </Suspense>
        ) : (
          <Typography color="textSecondary" variant="h5" gutterBottom>
            This space will be replaced by the remote component
          </Typography>
        )}
      </Box>
    </>
  );
}
