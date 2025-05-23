package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.model.MarketPrice;
import com.smartfarmareca.backend.service.MarketPriceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/market-prices")  
public class MarketPriceController {

    @Autowired
    private MarketPriceService marketPriceService;

    
    @GetMapping("/all")
    public ResponseEntity<List<MarketPrice>> getAllPrices() {
        List<MarketPrice> prices = marketPriceService.getAllPrices();
        
        if (prices.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        
        return ResponseEntity.ok(prices);  
    }

   
    
    

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping("/add-details")
    public ResponseEntity<Map<String, Object>> addDetails(@RequestBody MarketPrice marketPrice) {
        try {
            // Save the received data
            MarketPrice savedPrice = marketPriceService.addDetails(marketPrice);

            // Create a response map
            Map<String, Object> response = new HashMap<>();
            response.put("message", "Added successfully");
            response.put("data", savedPrice);

            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
        }
    }
}
    

