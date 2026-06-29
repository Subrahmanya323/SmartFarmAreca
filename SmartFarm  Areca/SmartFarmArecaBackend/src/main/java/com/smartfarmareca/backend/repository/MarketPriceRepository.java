package com.smartfarmareca.backend.repository;

import com.smartfarmareca.backend.model.MarketPrice;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MarketPriceRepository extends JpaRepository<MarketPrice, Long> {
}
