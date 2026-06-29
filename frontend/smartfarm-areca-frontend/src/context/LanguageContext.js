import React, {
  createContext,
  useState,
  useContext
} from "react";

const LanguageContext =
  createContext();

export const translations = {

  en: {

    nav: {
      home: "Home",
      cultivation: "Cultivation",
      disease: "Disease Management",
      market: "Market Prices",
      schemes: "Govt. Schemes"
    }

  },

  kn: {

    nav: {
      home: "ಮುಖಪುಟ",
      cultivation: "ಬೆಳೆಸುವಿಕೆ",
      disease: "ರೋಗ ನಿರ್ವಹಣೆ",
      market: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
      schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು"
    }

  }

};

export const LanguageProvider =
({ children }) => {

  const [language, setLanguage]
  = useState("en");

  const toggleLanguage = () => {

    setLanguage(prev =>
      prev === "en"
        ? "kn"
        : "en"
    );
  };

  return (

    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        translations:
          translations[language]
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {

  const context =
    useContext(LanguageContext);

  if (!context) {

    throw new Error(
      "useLanguage must be used within a LanguageProvider"
    );
  }

  return context;
};