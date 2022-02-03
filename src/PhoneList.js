import React from 'react';
import Phone from './Phone';

export default function Workshop({ phones }) {
  return <div className='phones'>
    <Phone phones={phones} />
  </div>;
}
