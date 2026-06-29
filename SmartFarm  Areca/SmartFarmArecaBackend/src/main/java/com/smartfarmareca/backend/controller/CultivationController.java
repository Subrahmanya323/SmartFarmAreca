package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.service.CultivationScraperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/cultivation")
@CrossOrigin(origins = "http://localhost:3000") // Allow frontend access
public class CultivationController {

    @Autowired
    private CultivationScraperService scraperService;

    @GetMapping("/live")
    public List<Map<String, String>> getLiveCultivationData() {
        return scraperService.fetchCultivationPractices();
    }
}
