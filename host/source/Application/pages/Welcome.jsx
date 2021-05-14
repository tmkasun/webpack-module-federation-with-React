import Box from '@material-ui/core/Box';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function StickyFooter() {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello from
        {' '}
        <Box display="inline" color="info.main"> Host </Box>
        {' '}
        application
      </Typography>
      <Box p={2} m={5} borderRadius="borderRadius" border={1} borderColor="primary.main">
        <Typography variant="body1">
          This is a demo application to show how to decouple large monolithic application into
          a collection of Micro Frontends.
          You can find the source code of this demo app in this
          {' '}
          <Link underline="none" href="https://github.com/tmkasun/webpack-module-federation-with-React">
            <b>Github repo</b>
          </Link>
        </Typography>

        <Box mt={2}>
          <Typography variant="body1">
            There are many ways of implementing a Micro Frontend architecture.
            In this demo,
            I have used decoupling of components using the
            {' '}
            <Link underline="none" href="https://webpack.js.org/concepts/module-federation/">
              <b>Webpack 5 module federation</b>
            </Link>
            {' '}
            plugin.
            {' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
}
