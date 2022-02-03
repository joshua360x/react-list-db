import React from 'react';
import Computer from './Computer';

export default function ComputerList({ computers }) {
  return (
    <div className="computers">
      <Computer computers={computers} />
    </div>
  );
}
