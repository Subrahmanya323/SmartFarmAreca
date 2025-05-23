import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Schemes.css";
import "../components/CommonStyles.css";

const Schemes = () => {
  const { translations } = useLanguage();
  const [selectedScheme, setSelectedScheme] = useState(null);

  const renderSchemeContent = (scheme) => {
    const content = translations.schemes.sections[scheme];
    return (
      <>
        <h2 className="scheme-title">{content.title}</h2>
        <div className="section">
          <h3>{content.content.description.title}</h3>
          <p>{content.content.description.text}</p>
        </div>

        <div className="section">
          <h3>{content.content.benefits.title}</h3>
          <ul>
            {content.content.benefits.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>{content.content.eligibility.title}</h3>
          <ul>
            {content.content.eligibility.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>{content.content.application.title}</h3>
          <ul>
            {content.content.application.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </>
    );
  };

  return (
    <div className="schemes">
      <h1 className="page-title">{translations.schemes.title}</h1>
      <p className="page-subtitle">{translations.schemes.subtitle}</p>
      
      <div className="scheme-list">
        {Object.keys(translations.schemes.sections).map((scheme) => (
          <button
            key={scheme}
            className={`scheme-button ${selectedScheme === scheme ? 'active' : ''}`}
            onClick={() => setSelectedScheme(scheme)}
          >
            {translations.schemes.sections[scheme].title}
          </button>
        ))}
      </div>

      {selectedScheme && (
        <div className="scheme-content">
          {renderSchemeContent(selectedScheme)}
        </div>
      )}
    </div>
  );
};

export default Schemes;
