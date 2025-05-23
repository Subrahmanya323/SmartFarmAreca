package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.service.MarketPriceScraperService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/market-prices")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend to access
public class MarketPriceScraperController {

    private final MarketPriceScraperService scraperService;

    public MarketPriceScraperController(MarketPriceScraperService scraperService) {
        this.scraperService = scraperService;
    }

    @GetMapping("/live")
    public List<Map<String, String>> getLiveMarketPrices() {
        try {
            List<Map<String, String>> marketPrices = scraperService.fetchMarketPrices();
            if (marketPrices.isEmpty()) {
                throw new RuntimeException("No market prices found!");
            }
            return marketPrices;
        } catch (Exception e) {
            throw new RuntimeException("Error fetching market prices: " + e.getMessage());
        }
    }
}
