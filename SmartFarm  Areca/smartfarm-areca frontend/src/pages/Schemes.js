import React, { useState, useRef, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { fetchContent } from "../services/contentService";
import "./Schemes.css";

const Schemes = () => {
  const { translations, language } = useLanguage();
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [schemeData, setSchemeData] = useState(null);
  const [loading, setLoading] = useState(true);
  const detailsRef = useRef(null);

  useEffect(() => {

    const loadSchemeData = async () => {

      try {

        setLoading(true);

        const response =
          await fetchContent(
            "schemes",
            language
          );

        if(response.length > 0) {

          const backendData =
            response[0];

          backendData.content =
            JSON.parse(
              backendData.content
            );

          setSchemeData(
            backendData
          );
        }

      } catch(error) {

        console.error(
          "Scheme fetch error:",
          error
        );

      } finally {

        setLoading(false);

      }
    };

    loadSchemeData();

  }, [language]);

  if(loading) {

    return (
      <div className="schemes-page">
        <h2>Loading...</h2>
      </div>
    );
  }

  if(!schemeData) {

    return (
      <div className="schemes-page">
        <h2>No schemes data found.</h2>
      </div>
    );
  }

  const renderSchemeContent = (scheme) => {
    const content = schemeData.content.sections[scheme];

    return (
      <div className="scheme-details-card">

        <div className="scheme-section">
          <h3>{content.content.description.title}</h3>
          <p>{content.content.description.text}</p>
        </div>

        <div className="scheme-section">
          <h3>{content.content.benefits.title}</h3>
          <ul>
            {content.content.benefits.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="scheme-section">
          <h3>{content.content.eligibility.title}</h3>
          <ul>
            {content.content.eligibility.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="scheme-section">
          <h3>{content.content.application.title}</h3>
          <ul>
            {content.content.application.points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </div>

      </div>
    );
  };

  return (
    <div className="schemes-page">

      {/* HERO SECTION */}
      <div className="schemes-hero">

        <div className="hero-content">
          <h1>{schemeData.title}</h1>

          <p>
            {schemeData.subtitle}
          </p>
        </div>

      </div>

      {/* SCHEME CARDS */}
      <div className="schemes-grid">

        {Object.keys(schemeData.content.sections).map((scheme, index) => {

          const content = schemeData.content.sections[scheme];

          return (
            <div
              key={scheme}
              className={`scheme-card ${
                selectedScheme === scheme ? "active" : ""
              }`}
              onClick={() => {
                setSelectedScheme(scheme);

                setTimeout(() => {
                  detailsRef.current?.scrollIntoView({
                    behavior: "smooth",
                    block: "start",
                  });
                }, 100);
              }}
            >

              <div className="scheme-card-top">
                <span className="scheme-icon">🏛️</span>

                <h2>{content.title}</h2>
              </div>

              <p>
                Click to explore benefits, eligibility,
                application process, and complete scheme details.
              </p>

              <button className="explore-btn">
                View Details →
              </button>

            </div>
          );
        })}
      </div>

      {/* DETAILS SECTION */}
      {selectedScheme && (
        <div className="scheme-details-container" ref={detailsRef}
        >

          <div className="details-header">
            <h2>
              {schemeData.content.sections[selectedScheme].title}
            </h2>
          </div>

          {renderSchemeContent(selectedScheme)}

        </div>
      )}

    </div>
  );
};

export default Schemes;