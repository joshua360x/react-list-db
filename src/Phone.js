import React from 'react';

export default function Phone({ phones }) {
  return (
    <>
      {phones.map((phone, i) => (
        <div className="phone" key={phone.BRAND + i}>
          <p>{phone.BRAND}</p>
          <p>This Phone is {phone.SIZE_INCHES} inches</p>
          <p>Released In {phone.RELEASE_DATE}</p>
          <p>Sold {phone.SALES_IN_MILLIONS} Million</p>
        </div>
      ))}
    </>
  );
}
