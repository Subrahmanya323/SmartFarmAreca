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

    private static final String URL = "https://agriplus.in/prices/arecanut-betelnut-supari/karnataka";

    public List<Map<String, String>> fetchMarketPrices() {
        List<Map<String, String>> marketPrices = new ArrayList<>();

        try {
            Document doc = Jsoup.connect(URL).get();
            Elements tableRows = doc.select("table tbody tr");

            for (Element row : tableRows) {
                Elements columns = row.select("td");

                if (columns.size() >= 9) {
                    Map<String, String> priceData = new LinkedHashMap<>();
                    priceData.put("SL NO.", columns.get(0).text());
                    priceData.put("State", columns.get(1).text());
                    priceData.put("District", columns.get(2).text());
                    priceData.put("Market", columns.get(3).text());
                    priceData.put("Commodity", columns.get(4).text());
                    priceData.put("Variety", columns.get(5).text());
                    priceData.put("Min Price", columns.get(6).text());
                    priceData.put("Max Price", columns.get(7).text());
                    priceData.put("Modal Price", columns.get(8).text());
                    priceData.put("Price Date", columns.get(9).text());

                    marketPrices.add(priceData);
                }
            }
        } catch (IOException e) {
            throw new RuntimeException("Error fetching market prices: " + e.getMessage());
        }

        return marketPrices;
    }
}
