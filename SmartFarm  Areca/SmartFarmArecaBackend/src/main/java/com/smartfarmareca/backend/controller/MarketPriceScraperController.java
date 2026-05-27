package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.service.MarketPriceScraperService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/market-prices")
@CrossOrigin(origins = "http://localhost:3000")
public class MarketPriceScraperController {

    private final MarketPriceScraperService scraperService;

    public MarketPriceScraperController(
            MarketPriceScraperService scraperService) {

        this.scraperService = scraperService;
    }

    @GetMapping("/live")
    public ResponseEntity<?> getLiveMarketPrices() {

        try {

            List<Map<String, String>> data =
                    scraperService.fetchMarketPrices();

            return ResponseEntity.ok(data);

        } catch (Exception e) {

            e.printStackTrace();

            return ResponseEntity
                    .badRequest()
                    .body(Map.of(
                            "error",
                            e.getMessage()
                    ));
        }
    }
}