// components/InfoCards/InfoCards.jsx
import React from 'react';
import './InfoCards.css';
import { education, experience } from '../../models/resumeData';

const TimelineItem = ({ title, year, description }) => (
  <div className="timeline-item">
    <div className="timeline-marker"></div>
    <div className="timeline-content">
      <h3 className="timeline-title">{title}</h3>
      <span className="timeline-year">{year}</span>
      <p className="timeline-description">{description}</p>
    </div>
  </div>
);

const InfoCards = () => {
  return (
    <div className="info-cards-container">
      {/* Education Section */}
      <section className="timeline-section" style={{ gridColumn: '1 / 2' }}>
        <h2 className="section-title">Education & Certifications</h2>
        <div className="timeline">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="timeline-section" style={{ gridColumn: '2 / 3' }}>
        <h2 className="section-title">Experience</h2>
        <div className="timeline">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default InfoCards;


 
