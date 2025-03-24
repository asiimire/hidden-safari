import React from 'react';
import './Footer.css';

const FooterSection = () => {
  return (
    <div className="footer-section">
      {/* Heading and Subheading */}
      <div className="footer-heading">
        <h2>Experience yourself</h2>
        <p>Exclusive footage from our camps</p>
      </div>

      {/* Testimonials */}
      <div className="testimonials">
        <h3>Why people ❤ Invincible</h3>
        <p>Experience the best with us</p>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p className="quote">
              "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and balanced."
            </p>
            <div className="author">
              <p>Milton Austin</p>
              <p>Sales Manager, ABC</p>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and balanced."
            </p>
            <div className="author">
              <p>Annie</p>
              <p>Head of Sales, ABC</p>
            </div>
          </div>
          <div className="testimonial-card">
            <p className="quote">
              "This trekking organization is excellent. Their costs are minimal due to their NGO’s non-profit efforts. You can have the experience of trekking at the lowest cost with basic amenities and the best available trek leaders. The best part is the food they provide during the trek. Their cooks are the best I have experienced so far with different organizations. The food they serve is healthy and balanced."
            </p>
            <div className="author">
              <p>Sandra</p>
              <p>Head of Sales, ABC</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="footer-links">
          <p>HiddenSafari</p>
          <ul>
            <li>Teams</li>
            <li>About</li>
            <li>Events</li>
            <li>Contact US</li>
            <li>Terms and Condition</li>
          </ul>
        </div>
        <div className="email-input">
          <input type="email" placeholder="Enter your Email" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;