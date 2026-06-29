package com.smartfarmareca.backend.service;

import com.smartfarmareca.backend.model.MarketPrice;
import com.smartfarmareca.backend.repository.MarketPriceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MarketPriceService {

    @Autowired
    private MarketPriceRepository repository;

    // Fetch all prices
    public List<MarketPrice> getAllPrices() {
        return repository.findAll();
    }

    // Add a new market price record
    public MarketPrice addDetails(MarketPrice marketPrice) {
        if (marketPrice.getRegion() == null || marketPrice.getPrice() == null) {
            throw new IllegalArgumentException("Region and Price cannot be null");
        }
        return repository.save(marketPrice);
    }
}
