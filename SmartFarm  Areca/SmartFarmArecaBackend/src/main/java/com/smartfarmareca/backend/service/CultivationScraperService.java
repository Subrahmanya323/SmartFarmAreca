package com.smartfarmareca.backend.service;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CultivationScraperService {

    private static final String URL = "http://e-krishiuasb.karnataka.gov.in/ItemDetails.aspx?depID=2&subDepID=2&cropID=2";

    public List<Map<String, String>> fetchCultivationPractices() {
        List<Map<String, String>> cultivationData = new ArrayList<>();

        try {
            Document document = Jsoup.connect(URL).get();
            Elements sections = document.select(".ItemDetails tr");

            System.out.println("Fetched Sections: " + sections.size()); // Debugging line

            for (Element section : sections) {
                Map<String, String> data = new HashMap<>();
                Element titleElement = section.selectFirst("td strong");
                Element descriptionElement = section.selectFirst("td");

                if (titleElement != null && descriptionElement != null) {
                    data.put("title", titleElement.text());
                    data.put("description", descriptionElement.text());
                    cultivationData.add(data);
                }
            }

            System.out.println("Final Cultivation Data: " + cultivationData); // Debugging line

        } catch (IOException e) {
            e.printStackTrace();
        }

        return cultivationData;
    }

}
