import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./DiseaseManagement.css";
import "../components/CommonStyles.css";

const DiseaseManagement = () => {
  const { translations } = useLanguage();
  const [selectedDisease, setSelectedDisease] = useState(null);

  const renderDiseaseContent = (disease) => {
    const content = translations.disease.sections[disease];
    return (
      <>
        <h2 className="disease-title">{content.title}</h2>
        <div className="section">
          <h3>{content.content.symptoms.title}</h3>
          <ul>
            {content.content.symptoms.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>{content.content.causes.title}</h3>
          <ul>
            {content.content.causes.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>{content.content.management.title}</h3>
          <ul>
            {content.content.management.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>{content.content.preventive.title}</h3>
          <ul>
            {content.content.preventive.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="disease-management">
      <h1 className="page-title">{translations.disease.title}</h1>
      <p className="page-subtitle">{translations.disease.subtitle}</p>
      
      <div className="disease-list">
        {Object.keys(translations.disease.sections).map((disease, index) => (
          <button
            key={disease}
            className={`disease-button ${selectedDisease === disease ? 'active' : ''}`}
            onClick={() => setSelectedDisease(disease)}
          >
            {translations.disease.sections[disease].title}
          </button>
        ))}
      </div>

      {selectedDisease && (
        <div className="disease-content">
          {renderDiseaseContent(selectedDisease)}
        </div>
      )}
    </div>
  );
};

export default DiseaseManagement;
