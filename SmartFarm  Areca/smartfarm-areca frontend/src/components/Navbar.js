import React from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import "./Navbar.css";

const Navbar = () => {
  const { translations, toggleLanguage, language } = useLanguage();

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="nav-brand">
        <Link to="/">SmartFarm Areca 🌿</Link>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <Link to="/">{translations.nav.home}</Link>

        <Link to="/cultivation">
          {translations.nav.cultivation}
        </Link>

        <Link to="/disease-management">
          {translations.nav.disease}
        </Link>

        <Link to="/market-prices">
          {translations.nav.market}
        </Link>

        <Link to="/schemes">
          {translations.nav.schemes}
        </Link>

        {/* Language Button INSIDE Navbar */}
        <button
          onClick={toggleLanguage}
          className="language-button"
        >
          {language === "en" ? "ಕನ್ನಡ" : "English"}
        </button>

      </div>

    </nav>
  );
};

export default Navbar;