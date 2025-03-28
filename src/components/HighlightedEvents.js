import React, { useState } from 'react';
import './HighlightedEvents.css';

const HighlightedEvents = () => {
  // 1. State for selected event
  const [selectedEvent, setSelectedEvent] = useState(null);
  
  // 2. State for favorited events
  const [favorites, setFavorites] = useState([]);

  const events = [
    { id: 4, image: '/Kampala.jpg', name: 'Kampala', details: 'X 4 6' },
    { id: 5, image: '/jinja.jpg', name: 'Jinja', details: 'X 4 6' },
    { id: 1, image: '/kilimanjaro.jpg', name: 'Kilimanjaro', details: 'X 4 6' },
    { id: 2, image: '/madagascar.jpg', name: 'Madagascar', details: 'X 4 6' },
    { id: 3, image: '/cape-town.jpg', name: 'Capo-Town', details: 'X 4 6' },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id) // Remove if already favorited
        : [...prev, id] // Add to favorites
    );
  };

  return (
    <div className="highlighted-events">
      <h2>Highlighted Events</h2>
      <p>Recommended camps by our instructors</p>
      
      <div className="cards-container">
        {events.map((event) => (
          <div 
            key={event.id} 
            className={`event-card ${selectedEvent === event.id ? 'selected' : ''}`}
            onClick={() => setSelectedEvent(event.id)}
          >
            <img 
              src={event.image} 
              alt={event.name} 
              style={{
                transform: selectedEvent === event.id ? 'scale(1.05)' : 'scale(1)',
                transition: 'transform 0.3s ease'
              }}
            />
            <h3>{event.name}</h3>
            <p>{event.details}</p>
            <button 
              onClick={(e) => {
                e.stopPropagation();
                toggleFavorite(event.id);
              }}
              className={favorites.includes(event.id) ? 'favorited' : ''}
            >
              {favorites.includes(event.id) ? '❤️' : '🤍'}
            </button>
          </div>
        ))}
      </div>

      {selectedEvent && (
        <div className="event-details">
          Showing details for: {events.find(e => e.id === selectedEvent).name}
        </div>
      )}
    </div>
  );
};

export default HighlightedEvents;