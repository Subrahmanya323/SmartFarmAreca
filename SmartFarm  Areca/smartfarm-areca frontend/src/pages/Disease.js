import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Disease.css';

const Disease = () => {
  const { translations } = useLanguage();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const renderDiseaseContent = (disease) => {
    const content = translations.disease.sections[disease];
    return (
      <div className="disease-content">
        <h2>{content.title}</h2>
        <div className="disease-details">
          <div className="disease-section">
            <h3>{content.content.symptoms.title}</h3>
            <ul>
              {content.content.symptoms.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="disease-section">
            <h3>{content.content.causes.title}</h3>
            <ul>
              {content.content.causes.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="disease-section">
            <h3>{content.content.management.title}</h3>
            <ul>
              {content.content.management.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="disease-section">
            <h3>{content.content.preventive.title}</h3>
            <ul>
              {content.content.preventive.points.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="disease-container">
      <h1>{translations.disease.title}</h1>
      <p className="subtitle">{translations.disease.subtitle}</p>
      
      <div className="disease-grid">
        {Object.keys(translations.disease.sections).map((disease) => (
          <div
            key={disease}
            className={`disease-card ${selectedDisease === disease ? 'selected' : ''}`}
            onClick={() => setSelectedDisease(disease)}
          >
            <h3>{translations.disease.sections[disease].title}</h3>
          </div>
        ))}
      </div>

      {selectedDisease && renderDiseaseContent(selectedDisease)}
    </div>
  );
};

export default Disease; 