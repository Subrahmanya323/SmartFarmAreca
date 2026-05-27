package com.smartfarmareca.backend.config;

import com.smartfarmareca.backend.config.data.CultivationData;
import com.smartfarmareca.backend.config.data.CultivationKannadaData;
import com.smartfarmareca.backend.config.data.DiseaseData;
import com.smartfarmareca.backend.config.data.DiseaseKannadaData;
import com.smartfarmareca.backend.config.data.SchemeData;
import com.smartfarmareca.backend.config.data.SchemeKannadaData;

import com.smartfarmareca.backend.model.AgriculturalContent;
import com.smartfarmareca.backend.repository.AgriculturalContentRepository;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    private final AgriculturalContentRepository repository;

    public DataLoader(
            AgriculturalContentRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public void run(String... args)
            throws Exception {

        if(repository.count() == 0) {

            insertDiseaseEnglish();
            insertDiseaseKannada();

            insertCultivationEnglish();
            insertCultivationKannada();

            insertSchemeEnglish();
            insertSchemeKannada();

            System.out.println(
                    "All agricultural content inserted successfully!"
            );
        }
    }

    private void saveContent(
            String moduleType,
            String contentKey,
            String languageCode,
            String title,
            String subtitle,
            String contentJson
    ) {

        AgriculturalContent content =
                new AgriculturalContent();

        content.setModuleType(moduleType);

        content.setContentKey(contentKey);

        content.setLanguageCode(languageCode);

        content.setTitle(title);

        content.setSubtitle(subtitle);

        content.setContent(contentJson);

        repository.save(content);
    }

    // =========================
    // DISEASE ENGLISH
    // =========================

    private void insertDiseaseEnglish() {

        saveContent(
                "disease",
                "main",
                "en",
                "Disease Management 🦠",
                "Select a disease to view detailed information and management practices.",
                DiseaseData.ENGLISH
        );
    }

    // =========================
    // DISEASE KANNADA
    // =========================

    private void insertDiseaseKannada() {

        saveContent(
                "disease",
                "main",
                "kn",
                "ರೋಗ ನಿರ್ವಹಣೆ 🦠",
                "ವಿವರವಾದ ಮಾಹಿತಿ ಮತ್ತು ನಿರ್ವಹಣೆ ಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಲು ರೋಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
                DiseaseKannadaData.KANNADA
        );
    }

    // =========================
    // CULTIVATION ENGLISH
    // =========================

    private void insertCultivationEnglish() {

        saveContent(
                "cultivation",
                "main",
                "en",
                "Arecanut Cultivation Guide 🌱",
                "Comprehensive guide for successful arecanut farming",
                CultivationData.ENGLISH
        );
    }

    // =========================
    // CULTIVATION KANNADA
    // =========================

    private void insertCultivationKannada() {

        saveContent(
                "cultivation",
                "main",
                "kn",
                "ಅಡಿಕೆ ಬೆಳೆಸುವಿಕೆ ಮಾರ್ಗದರ್ಶಿ 🌱",
                "ಯಶಸ್ವಿ ಅಡಿಕೆ ಕೃಷಿಗಾಗಿ ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ",
                CultivationKannadaData.KANNADA
        );
    }

    // =========================
    // SCHEME ENGLISH
    // =========================

    private void insertSchemeEnglish() {

        saveContent(
                "schemes",
                "main",
                "en",
                "Government Schemes 🏛️",
                "Explore various government schemes and support programs for arecanut farmers.",
                SchemeData.ENGLISH
        );
    }

    // =========================
    // SCHEME KANNADA
    // =========================

    private void insertSchemeKannada() {

        saveContent(
                "schemes",
                "main",
                "kn",
                "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು 🏛️",
                "ಅಡಿಕೆ ರೈತರಿಗಾಗಿ ವಿವಿಧ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
                SchemeKannadaData.KANNADA
        );
    }
}