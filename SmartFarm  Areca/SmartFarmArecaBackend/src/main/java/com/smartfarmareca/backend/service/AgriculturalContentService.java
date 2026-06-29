package com.smartfarmareca.backend.service;

import com.smartfarmareca.backend.model.AgriculturalContent;
import com.smartfarmareca.backend.repository.AgriculturalContentRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgriculturalContentService {

    private final AgriculturalContentRepository repository;

    public AgriculturalContentService(
            AgriculturalContentRepository repository
    ) {
        this.repository = repository;
    }

    public List<AgriculturalContent> getContent(
            String moduleType,
            String languageCode
    ) {
        return repository.findByModuleTypeAndLanguageCode(
                moduleType,
                languageCode
        );
    }

    public AgriculturalContent saveContent(
            AgriculturalContent content
    ) {
        return repository.save(content);
    }
}