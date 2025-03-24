import React from 'react';
import './EpicAdventure.css';

const HighlightedEvents = () => {
  // Data for the cards
  const events = [
    {
      id: 1,
      image: '/kilimanjaro.jpg', // Path to your image
      name: 'Kilimanjaro Trek',
    },
    {
      id: 2,
      image: '/madagascar.jpg', // Path to your image
      name: 'Hwange Park',
    },
    {
      id: 3,
      image: '/cape-town.jpg', // Path to your image
      name: 'Botswana',
    },
    
  ];

  return (
    <div className="highlighted-events">
      <h2>Epic Adventure</h2>
      <p>Push your limits with our most thrilling outdoor challenges</p>
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