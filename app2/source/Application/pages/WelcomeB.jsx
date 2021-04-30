import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function WelcomeB() {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello from App2 the
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        This component is in
        {' '}
        <b> App 2 </b>
      </Typography>
      <Typography variant="body1">Sticky footer placeholder.</Typography>
    </>
  );
}
