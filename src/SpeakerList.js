import React from 'react';
import Speaker from './Speaker';

export default function SpeakerList({ speakers }) {
  return (
    <div className="speakers">
      <Speaker speakers={speakers} />
    </div>
  );
}
