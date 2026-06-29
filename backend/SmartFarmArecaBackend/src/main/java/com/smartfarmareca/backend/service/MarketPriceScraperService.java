package com.smartfarmareca.backend.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@Service
public class MarketPriceScraperService {

    private static final String URL =
            "https://agriplus.in/prices/arecanut-betelnut-supari/karnataka";

    public List<Map<String, String>> fetchMarketPrices() {

        List<Map<String, String>> marketPrices = new ArrayList<>();

        try {

            Document doc = Jsoup.connect(URL)
                    .userAgent(
                            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/120 Safari/537.36")
                    .header("Accept-Language", "en-US,en;q=0.9")
                    .header("Cache-Control", "no-cache")
                    .timeout(30000)
                    .ignoreContentType(true)
                    .get();

            // Debugging
            System.out.println("Page Title: " + doc.title());

            Elements rows = doc.select("table tbody tr");

            if (rows.isEmpty()) {
                rows = doc.select("table tr");
            }

            for (Element row : rows) {

                Elements cols = row.select("td");

                // Skip invalid rows
                if (cols.size() < 9) {
                    continue;
                }

                Map<String, String> data = new LinkedHashMap<>();

                data.put("SL NO.", getColumn(cols, 0));
                data.put("State", getColumn(cols, 1));
                data.put("District", getColumn(cols, 2));
                data.put("Market", getColumn(cols, 3));
                data.put("Commodity", getColumn(cols, 4));
                data.put("Variety", getColumn(cols, 5));
                data.put("Min Price", getColumn(cols, 6));
                data.put("Max Price", getColumn(cols, 7));
                data.put("Modal Price", getColumn(cols, 8));

                // Some rows may not contain date
                data.put("Price Date",
                        cols.size() > 9 ? getColumn(cols, 9) : "N/A");

                marketPrices.add(data);
            }

            if (marketPrices.isEmpty()) {
                throw new RuntimeException("No market price data found.");
            }

            return marketPrices;

        } catch (IOException e) {

            e.printStackTrace();

            throw new RuntimeException(
                    "Failed to fetch market prices: " + e.getMessage());
        }
    }

    private String getColumn(Elements cols, int index) {

        if (index >= cols.size()) {
            return "N/A";
        }

        return cols.get(index).text().trim();
    }
}