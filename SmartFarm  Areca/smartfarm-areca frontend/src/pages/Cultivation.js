import React, { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./Cultivation.css";

const Cultivation = () => {
  const { translations } = useLanguage();
  const [selectedSection, setSelectedSection] = useState(null);

  const sections = [
    'landPreparation',
    'varietalDescription',
    'raisingSeedlings',
    'planting',
    'intercropping',
    'nutrientManagement',
    'waterManagement'
  ];

  const renderContent = (section) => {
    const content = translations.cultivation.sections[section].content;
    
    switch (section) {
      case 'landPreparation':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.siteSelection.title}</h3>
              <ul>
                {content.siteSelection.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="subsection">
              <h3>{content.landClearing.title}</h3>
              <ul>
                {content.landClearing.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
            <div className="subsection">
              <h3>{content.shadeManagement.title}</h3>
              <ul>
                {content.shadeManagement.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
          </div>
        );

      case 'varietalDescription':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.popularVarieties.title}</h3>
              <div className="varieties-grid">
                {content.popularVarieties.varieties.map((variety, index) => (
                  <div key={index} className="variety-card">
                    <h4>{variety.name}</h4>
                    <p><strong>Characteristics:</strong> {variety.characteristics}</p>
                    <p><strong>Yield:</strong> {variety.yield}</p>
                    <p><strong>Region:</strong> {variety.region}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'raisingSeedlings':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.motherPalm.title}</h3>
              <ul>
                {content.motherPalm.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="subsection">
              <h3>{content.nurseryManagement.title}</h3>
              <ul>
                {content.nurseryManagement.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        );

      case 'planting':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.season.title}</h3>
              <ul>
                {content.season.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="subsection">
              <h3>{content.method.title}</h3>
              <ul>
                {content.method.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
          </div>
        );

      case 'intercropping':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.suitableCrops.title}</h3>
              <ul>
                {content.suitableCrops.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
            <div className="subsection">
              <h3>{content.benefits.title}</h3>
              <ul>
                {content.benefits.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
          </div>
        );

      case 'nutrientManagement':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.schedule.title}</h3>
              <div className="schedule-table">
                <table>
            <thead>
              <tr>
                      <th>Age</th>
                      <th>Nitrogen</th>
                      <th>Phosphorus</th>
                      <th>Potassium</th>
                      <th>Organic Manure</th>
              </tr>
            </thead>
            <tbody>
                    {content.schedule.schedule.map((row, index) => (
                      <tr key={index}>
                        <td>{row.age}</td>
                        <td>{row.nitrogen}</td>
                        <td>{row.phosphorus}</td>
                        <td>{row.potassium}</td>
                        <td>{row.organicManure}</td>
              </tr>
                    ))}
            </tbody>
          </table>
              </div>
            </div>
          </div>
        );

      case 'waterManagement':
        return (
          <div className="section-content">
            <div className="subsection">
              <h3>{content.irrigation.title}</h3>
              <ul>
                {content.irrigation.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="subsection">
              <h3>{content.drainage.title}</h3>
              <ul>
                {content.drainage.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
          </ul>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="cultivation-container">
      <div className="cultivation-header">
        <h1>{translations.cultivation.title}</h1>
        <p className="subtitle">{translations.cultivation.subtitle}</p>
      </div>

      <div className="cultivation-content">
        <div className="sections-sidebar">
          {sections.map((section) => (
          <button
              key={section}
              className={`section-button ${selectedSection === section ? 'active' : ''}`}
              onClick={() => setSelectedSection(section)}
            >
              {translations.cultivation.sections[section].title}
          </button>
        ))}
      </div>

        <div className="section-details">
          {selectedSection ? (
            <div className="selected-section">
              <h2>{translations.cultivation.sections[selectedSection].title}</h2>
              {renderContent(selectedSection)}
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Welcome to the Cultivation Guide</h2>
              <p>Select a section from the sidebar to view detailed information about arecanut cultivation.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cultivation;
