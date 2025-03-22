import React from 'react';
import './HighlightedEvents.css';

const HighlightedEvents = () => {
  // Data for the cards
  const events = [
    {
      id: 4,
      image: '/Kampala.jpg', // Path to your image
      name: 'Kruger Park',
      details: 'X 4 6',
    },
    {
      id: 5,
      image: '/jinja.jpg', // Path to your image
      name: 'Western Cape',
      details: 'X 4 6',
    },
    {
      id: 1,
      image: '/kilimanjaro.jpg', // Path to your image
      name: 'Addo Park',
      details: 'X 4 6',
    },
    {
      id: 2,
      image: '/madagascar.jpg', // Path to your image
      name: 'Masai Mara',
      details: 'X 4 6',
    },
    
    
  ];

  return (
    <div className="highlighted-events">
      <h2>Summer Events</h2>
      <p>Join our exciting range of summer activities</p>
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