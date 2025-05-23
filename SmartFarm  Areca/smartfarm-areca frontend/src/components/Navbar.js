import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css"; // We'll add styles later

const Navbar = () => {
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">
          <Link to="/">SmartFarm Areca 🌿</Link>
        </div>
        <div className="nav-links">
          <Link to="/">{translations.nav.home}</Link>
          <Link to="/cultivation">{translations.nav.cultivation}</Link>
          <Link to="/disease-management">{translations.nav.disease}</Link>
          <Link to="/market-prices">{translations.nav.market}</Link>
          <Link to="/schemes">{translations.nav.schemes}</Link>
        </div>
      </nav>
      <div className="language-switch-container">
        <button onClick={toggleLanguage} className="language-button">
          {language === 'en' ? 'ಕನ್ನಡ' : 'English'}
        </button>
      </div>
    </>
  );
};

export default Navbar;
