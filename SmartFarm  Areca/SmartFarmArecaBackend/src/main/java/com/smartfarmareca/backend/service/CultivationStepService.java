package com.smartfarmareca.backend.service;

import com.smartfarmareca.backend.model.CultivationStep;
import com.smartfarmareca.backend.repository.CultivationStepRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CultivationStepService {

    @Autowired
    private CultivationStepRepository repository;

    public List<CultivationStep> getAllSteps() {
        return repository.findAll();
    }

    public CultivationStep addStep(CultivationStep step) {
        return repository.save(step);
    }
}
