import React from 'react';
import spinner from './spinner.gif';

export default function Spinner() {
  return (
    <div>
      <img
        src={spinner}
        alt="Loading..."
        style={{ with: '200 px', margin: 'auto', display: 'block' }}
      />
    </div>
  );
}
