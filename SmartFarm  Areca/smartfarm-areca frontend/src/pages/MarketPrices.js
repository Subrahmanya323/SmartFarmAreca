import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MarketPrices.css"; // Ensure this file exists for styling

const MarketPrices = () => {
  const [prices, setPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]); // Filtered data for search
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Search input state

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/market-prices/live")
      .then((response) => {
        setPrices(response.data);
        setFilteredPrices(response.data); // Initialize filtered data
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Failed to load market prices.");
        setLoading(false);
      });
  }, []);

  // Handle Search Function
  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = prices.filter((item) =>
      item.Market.toLowerCase().includes(query)
    );
    setFilteredPrices(filteredData);
  };

  return (
    <div className="market-prices-container">
      <h2>Market Prices (Agriplus Source)</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search by Market..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />

      {loading ? (
        <p>Loading market prices...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        <table className="market-prices-table">
          <thead>
            <tr>
              <th>Sl. No</th>
              <th>State</th>
              <th>District</th>
              <th>Market</th>
              <th>Commodity</th>
              <th>Variety</th>
              <th>Min Price (₹)</th>
              <th>Max Price (₹)</th>
              <th>Modal Price (₹)</th>
              <th>Last Updated</th>
            </tr>
          </thead>
          <tbody>
            {filteredPrices.length > 0 ? (
              filteredPrices.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.State}</td>
                  <td>{item.District}</td>
                  <td>{item.Market}</td>
                  <td>{item.Commodity}</td>
                  <td>{item.Variety}</td>
                  <td>₹{item["Min Price"]}</td>
                  <td>₹{item["Max Price"]}</td>
                  <td>₹{item["Modal Price"]}</td>
                  <td>{item["Price Date"]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="no-data">No matching market found.</td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MarketPrices;
