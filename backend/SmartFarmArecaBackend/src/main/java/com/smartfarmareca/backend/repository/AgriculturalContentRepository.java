package com.smartfarmareca.backend.repository;

import com.smartfarmareca.backend.model.AgriculturalContent;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AgriculturalContentRepository
        extends JpaRepository<AgriculturalContent, Long> {

    List<AgriculturalContent> findByModuleTypeAndLanguageCode(
            String moduleType,
            String languageCode
    );
}