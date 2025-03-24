import React from 'react';
import './HighlightedEvents.css';

const HighlightedEvents = () => {
  // Data for the cards
  const events = [
    {
      id: 4,
      image: '/kampala.jpg', // Path to your image
      name: 'Hunting',
    },
    {
      id: 5,
      image: '/jinja.jpg', // Path to your image
      name: 'Training Camp',
    },
    
  ];

  return (
    <div className="highlighted-events">
      <h2>Special Events</h2>
      <p>Join us for unique, limited-time gatherings that celebrate remarkable occasions</p>
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