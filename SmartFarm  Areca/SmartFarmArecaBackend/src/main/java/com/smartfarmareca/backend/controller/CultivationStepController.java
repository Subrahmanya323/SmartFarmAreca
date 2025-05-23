package com.smartfarmareca.backend.controller;

import com.smartfarmareca.backend.model.CultivationStep;
import com.smartfarmareca.backend.service.CultivationStepService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;

import java.util.List;

@RestController
@RequestMapping("/api/cultivation")
@CrossOrigin(origins = "http://localhost:3000")  // Allow frontend access
public class CultivationStepController {

    @Autowired
    private CultivationStepService service;

    @GetMapping("/steps")
    public List<CultivationStep> getAllSteps() {
        return service.getAllSteps();
    }

    @PostMapping("/add")
    public ResponseEntity<?> addStep(@RequestBody CultivationStep step) {
        if (step.getTitle() == null || step.getTitle().trim().isEmpty()) {
            return ResponseEntity.badRequest().body("Error: Title cannot be null or empty.");
        }
        CultivationStep savedStep = service.addStep(step);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedStep);
    }

}
