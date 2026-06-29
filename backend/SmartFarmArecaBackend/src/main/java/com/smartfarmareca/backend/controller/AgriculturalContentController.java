package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.model.AgriculturalContent;
import com.smartfarmareca.backend.service.AgriculturalContentService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/content")
@CrossOrigin(origins = "http://localhost:3000")
public class AgriculturalContentController {

    private final AgriculturalContentService service;

    public AgriculturalContentController(
            AgriculturalContentService service
    ) {
        this.service = service;
    }

    @GetMapping("/{moduleType}/{languageCode}")
    public List<AgriculturalContent> getContent(
            @PathVariable String moduleType,
            @PathVariable String languageCode
    ) {

        return service.getContent(
                moduleType,
                languageCode
        );
    }

    @PostMapping
    public AgriculturalContent saveContent(
            @RequestBody AgriculturalContent content
    ) {

        return service.saveContent(content);
    }
}