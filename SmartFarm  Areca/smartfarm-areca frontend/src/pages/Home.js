import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to SmartFarm Areca 🌿</h1>
        <p className="subtitle">Empowering arecanut farmers with knowledge and resources</p>
      </div>

      <div className="features-grid">
        <div className="feature-card" onClick={() => navigate("/cultivation")}>
          <div className="feature-icon">🌱</div>
          <h3>Cultivation Guide</h3>
          <p>Step-by-step guidance on growing arecanut trees</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/disease-management")}>
          <div className="feature-icon">🦠</div>
          <h3>Disease Management</h3>
          <p>Find solutions to common tree diseases</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/market-prices")}>
          <div className="feature-icon">📊</div>
          <h3>Market Prices</h3>
          <p>Check the latest arecanut market prices</p>
        </div>

        <div className="feature-card" onClick={() => navigate("/schemes")}>
          <div className="feature-icon">🏛️</div>
          <h3>Govt. Schemes</h3>
          <p>Explore subsidies and support programs</p>
        </div>
      </div>

      <div className="info-section">
        <div className="info-card">
          <h3>Why Choose SmartFarm Areca?</h3>
          <ul>
            <li>Expert guidance for arecanut cultivation</li>
            <li>Real-time market price updates</li>
            <li>Disease diagnosis and solutions</li>
            <li>Access to government schemes</li>
          </ul>
        </div>

        <div className="info-card">
          <h3>Latest Updates</h3>
          <ul>
            <li>New cultivation techniques</li>
            <li>Market price trends</li>
            <li>Government scheme announcements</li>
            <li>Weather alerts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
