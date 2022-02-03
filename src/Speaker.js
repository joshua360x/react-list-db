import React from 'react';

export default function Speaker({ speakers }) {
  return (
    <>
      {speakers.map((speaker, i) => (
        <div className="speaker" key={speaker.BRAND + i}>
          <p>{speaker.BRAND}</p>
          <p>${speaker.PRICE}</p>
          <p>{speaker.AMAZON_RATING} / 5</p>
          <p>{speaker.HOW_LOUD} / 5</p>
        </div>
      ))}
    </>
  );
}
