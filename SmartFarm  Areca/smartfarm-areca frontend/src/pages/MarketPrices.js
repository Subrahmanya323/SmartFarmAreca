import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MarketPrices.css";

const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL || "http://localhost:8080";

const MarketPrices = () => {

  const [prices, setPrices] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {

    fetchMarketPrices();

  }, []);

  const fetchMarketPrices = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        `${API_BASE_URL}/api/market-prices/live`
      );

      console.log("API Response:", response.data);

      const data = Array.isArray(response.data)
        ? response.data
        : [];

      setPrices(data);
      setFilteredPrices(data);

    } catch (err) {

      console.error("Fetch Error:", err);

      setError(
        err?.response?.data?.error ||
        "Failed to load market prices."
      );

    } finally {

      setLoading(false);
    }
  };

  const handleSearch = (e) => {

    const query = e.target.value.toLowerCase();

    setSearchQuery(query);

    const filtered = prices.filter((item) =>
      (item.Market || "")
        .toLowerCase()
        .includes(query)
    );

    setFilteredPrices(filtered);
  };

  return (
    <div className="market-prices-container">

      <h2>Live Arecanut Market Prices 📈</h2>

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

        <div className="table-wrapper">
          <table className="market-prices-table">

            <thead>
              <tr>
                <th>SL NO.</th>
                <th>State</th>
                <th>District</th>
                <th>Market</th>
                <th>Commodity</th>
                <th>Variety</th>
                <th>Min Price</th>
                <th>Max Price</th>
                <th>Modal Price</th>
                <th>Price Date</th>
              </tr>
            </thead>

            <tbody>

              {filteredPrices.length > 0 ? (

                filteredPrices.map((item, index) => (

                  <tr key={index}>

                    <td>{item["SL NO."]}</td>
                    <td>{item.State}</td>
                    <td>{item.District}</td>
                    <td>{item.Market}</td>
                    <td>{item.Commodity}</td>
                    <td>{item.Variety}</td>
                    <td>₹ {item["Min Price"]}</td>
                    <td>₹ {item["Max Price"]}</td>
                    <td>₹ {item["Modal Price"]}</td>
                    <td>{item["Price Date"]}</td>

                  </tr>
                ))

              ) : (

                <tr>
                  <td colSpan="10">
                    No market data found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>
        </div>
      )}
    </div>
  );
};

export default MarketPrices;