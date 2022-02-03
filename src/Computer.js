import React from 'react';

export default function Computer({ computers }) {
  return (
    <>
      {computers.map((computer, i) => (
        <div className="computer" key={computer + i}>
          <p>{computer.BRAND}</p>
          <p>RAM: {computer.RAM_IN_GB} GB</p>
          <p>STORAGE: {computer.STORAGE_IN_GB} GB</p>
          <p>{computer.SOFTWARE}</p>
        </div>
      ))}
    </>
  );
}
