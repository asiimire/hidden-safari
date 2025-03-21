import React from 'react';
import './TreksList.css';

const TreksList = () => {
  const treks = [
    'KILIMANJARO',
    'Mount Kenya',
    'RWENZOR',
    'ATLAS',
    'Kilimanjaro Trek',
    'Mount Kenya Trek',
    'Rwenzori Trek',
    'Atlas Trek',
  ];

  return (
    <div className="treks-list">
      <h2>Popular Treks</h2>
      <ul>
        {treks.map((trek, index) => (
          <li key={index}>{trek}</li>
        ))}
      </ul>
    </div>
  );
};

export default TreksList;