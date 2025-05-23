import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Home from "./pages/Home";
import Cultivation from "./pages/Cultivation";
import DiseaseManagement from "./pages/DiseaseManagement";
import MarketPrices from "./pages/MarketPrices";
import Schemes from "./pages/Schemes";
import Navbar from "./components/Navbar"; // Ensure Navbar is imported

function App() {
  return (
    <LanguageProvider>
      <Router future={{ v7_relativeSplatPath: true }}>  {/* ✅ Fixes React Router v7 Warning */}
        <Navbar />  {/* ✅ Navbar stays on all pages */}
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cultivation" element={<Cultivation />} />
            <Route path="/disease-management" element={<DiseaseManagement />} />
            <Route path="/market-prices" element={<MarketPrices />} />
            <Route path="/schemes" element={<Schemes />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
