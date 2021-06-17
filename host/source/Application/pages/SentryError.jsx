import React from 'react';

const SentryError = () => (
  <div>
    <h2>Intentional error</h2>
    {/* eslint-disable-next-line no-undef */}
    <button type="button" onClick={methodDoesNotExist}>Break the world</button>
  </div>
);
export default SentryError;
