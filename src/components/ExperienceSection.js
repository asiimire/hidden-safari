import React from 'react';
import './ExperienceSection.css';

const ExperienceSection = () => {
  // Array of video thumbnails (replace with your actual image paths)
  const videoThumbnails = [
    '/images/video1.jpg',
    '/images/video2.jpg',
    '/images/video3.jpg',
    '/images/video4.jpg',
    '/images/video5.jpg',
  ];

  return (
    <div className="experience-section">
      <h2>Experience yourself</h2>
      <p>Exclusive footage from our camps</p>
      <div className="video-thumbnails">
        {videoThumbnails.map((thumbnail, index) => (
          <div key={index} className="thumbnail">
            <img src={thumbnail} alt={`Video Thumbnail ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;