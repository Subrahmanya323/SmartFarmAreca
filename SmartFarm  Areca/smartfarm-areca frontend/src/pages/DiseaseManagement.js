import React, {useState, useEffect} from "react";
import { fetchContent } from "../services/contentService";
import { useLanguage } from "../context/LanguageContext";
import diseaseImage from "../assets/Disease_management_image.png";
import fruitRotImage from "../assets/fruit_rot.png";
import yellowLeafImage from "../assets/yellow_leaf.png";
import budRotImage from "../assets/bud_rot.png";
import footRotImage from "../assets/foot_rot.png";
import "./DiseaseManagement.css";




const DiseaseManagement = () => {
  const { translations, language } = useLanguage();
  const [selectedDisease, setSelectedDisease] = useState(null);
  const [diseaseData, setDiseaseData] = useState(null);
  const [loading, setLoading] = useState(true);
  const diseaseImages = {
    koleroga: fruitRotImage,
    yellowLeaf: yellowLeafImage,
    budRot: budRotImage,
    footRot: footRotImage,
  };

  useEffect(() => {

    const loadDiseaseData = async () => {

      try {

        setLoading(true);

        const response =
          await fetchContent(
            "disease",
            language
          );

        if(response.length > 0) {

          const backendData = response[0];

          backendData.content =
            JSON.parse(
              backendData.content
            );

          setDiseaseData(backendData);
        }

      } catch(error) {

        console.error(
          "Disease fetch error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    loadDiseaseData();

  }, [language]);
  if(loading) {

    return (
      <div className="disease-management-container">
        <h2>Loading...</h2>
      </div>
    );
  }

  if(!diseaseData) {

    return (
      <div className="disease-management-container">
        <h2>No disease data found.</h2>
      </div>
    );
  }

  const renderDiseaseContent = (disease) => {
    const content = diseaseData.content.sections[disease];

    return (
      <div className="section-content">
        <div className="subsection">
          <h3>{content.content.symptoms.title}</h3>
          <ul>
            {content.content.symptoms.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="subsection">
          <h3>{content.content.causes.title}</h3>
          <ul>
            {content.content.causes.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="subsection">
          <h3>{content.content.management.title}</h3>
          <ul>
            {content.content.management.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="subsection">
          <h3>{content.content.preventive.title}</h3>
          <ul>
            {content.content.preventive.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  };

  return (
    <div className="disease-management-container">
      <div className="disease-header">
        <h1>{diseaseData.title}</h1>
        <p className="subtitle">{diseaseData.subtitle}</p>
      </div>

      <div className="disease-content-wrapper">

        <div className="disease-sidebar">
          {Object.keys(diseaseData.content.sections).map((disease) => (
            <button
              key={disease}
              className={`disease-button ${
                selectedDisease === disease ? "active" : ""
              }`}
              onClick={() => setSelectedDisease(disease)}
            >
              {diseaseData.content.sections[disease].title}
            </button>
          ))}
        </div>

        <div className="disease-details-section">
          {selectedDisease ? (
            <div className="selected-disease">
              <h2>
                {diseaseData.content.sections[selectedDisease].title}
              </h2>
              <img
                src={diseaseImages[selectedDisease]}
                alt={selectedDisease}
                className="disease-detail-image"
              />

              {renderDiseaseContent(selectedDisease)}
            </div>
          ) : (
            <div className="welcome-message">
              <h2>Welcome to Disease Management</h2>

              <p>
                Select a disease from the sidebar to view symptoms,
                causes, management, and preventive measures.
              </p>
              <img
                src={diseaseImage}
                alt="disease Guide"
                className="diseaseManagement-welcome-image"
              />
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default DiseaseManagement;