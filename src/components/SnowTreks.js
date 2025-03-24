import React from 'react';
import './HighlightedEvents.css';

const HighlightedEvents = () => {
  // Data for the cards
  const events = [
    {
      id: 4,
      image: '/Kampala.jpg', // Path to your image
      name: 'Kilimanjaro Trek',
    },
    {
      id: 5,
      image: '/jinja.jpg', // Path to your image
      name: 'Mountain Kenya Trek',
    },
    {
      id: 1,
      image: '/kilimanjaro.jpg', // Path to your image
      name: 'Rwenzori Trek',
    },
    {
      id: 2,
      image: '/madagascar.jpg', // Path to your image
      name: 'Atlas Trek',
    },
    
    
  ];

  return (
    <div className="highlighted-events">
      <h2>Snow Treks</h2>
      <p>Experience the magic of winter landscapes with our guided snow treks</p>
      <div className="cards-container">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <img src={event.image} alt={event.name} />
            <h3>{event.name}</h3>
            <p>{event.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HighlightedEvents;