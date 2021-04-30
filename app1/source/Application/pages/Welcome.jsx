import React from 'react';
import Typography from '@material-ui/core/Typography';

export default function StickyFooter() {
  return (
    <>
      <Typography variant="h2" component="h1" gutterBottom>
        Hello from Master application :)
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        This component is in App1 or the Master aoo
      </Typography>
      <Typography variant="body1">App1 Sticky footer placeholder.</Typography>
    </>
  );
}
