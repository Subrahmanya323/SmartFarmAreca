package com.smartfarmareca.backend.config.data;

public class CultivationData {

    public static final String ENGLISH = """
    {
      "sections": {

        "landPreparation": {
          "title": "Land Preparation",
          "content": {

            "siteSelection": {
              "title": "Site Selection",
              "points": [
                "Choose well-drained, fertile soil with good water-holding capacity",
                "Red loam, lateritic loam, or alluvial loam soils are ideal",
                "Soil pH should be between 6.0 and 7.0",
                "Avoid waterlogged, alkaline, or heavy clay soils"
              ]
            },

            "landClearing": {
              "title": "Land Clearing",
              "points": [
                "Remove existing vegetation and debris",
                "Plough the land to a depth of 30-45 cm",
                "Harrow the soil to break clods and level the surface",
                "Mark planting pits at recommended spacing (2.7m x 2.7m)"
              ]
            },

            "shadeManagement": {
              "title": "Shade Management",
              "points": [
                "Plant shade trees on western and southern borders",
                "Recommended shade trees: Jack, Neem, Pongamia, Mahagani, Silver Oak",
                "Maintain 40-50% shade during early growth stages",
                "Reduce shade to 30% after 5 years"
              ]
            }
          }
        },

        "varietalDescription": {
          "title": "Varietal Description",
          "content": {

            "popularVarieties": {
              "title": "Popular Varieties",
              "varieties": [

                {
                  "name": "Mangala",
                  "characteristics": "Medium tall, round small nuts",
                  "yield": "3.0 kg/plant",
                  "region": "Coastal"
                },

                {
                  "name": "Sumangala",
                  "characteristics": "Tall, round big nuts",
                  "yield": "3.18 kg/plant",
                  "region": "Coastal"
                },

                {
                  "name": "Thirthahalli",
                  "characteristics": "Local tall, long nuts",
                  "yield": "3.6 kg/plant",
                  "region": "Malnad"
                },

                {
                  "name": "Srivardhana",
                  "characteristics": "Round medium nuts",
                  "yield": "2.0 kg/plant",
                  "region": "All regions"
                }

              ]
            }
          }
        },

        "raisingSeedlings": {
          "title": "Raising Seedlings",
          "content": {

            "motherPalm": {
              "title": "Mother Palm Selection",
              "points": [
                "Select 20-40 years old healthy palms",
                "Choose palms with consistent high yield",
                "Ensure disease-free mother palms",
                "Select from best performing gardens in the locality"
              ]
            },

            "nurseryManagement": {
              "title": "Nursery Management",
              "points": [
                "Prepare raised beds with well-drained soil",
                "Maintain 50% shade in nursery",
                "Regular watering and weeding",
                "Protect from pests and diseases"
              ]
            }
          }
        },

        "planting": {
          "title": "Planting",
          "content": {

            "season": {
              "title": "Planting Season",
              "points": [
                "Best time: June-July (onset of monsoon)",
                "Avoid planting during heavy rains",
                "Ensure adequate soil moisture",
                "Plant in the morning hours"
              ]
            },

            "method": {
              "title": "Planting Method",
              "points": [
                "Dig pits of size 60cm x 60cm x 60cm",
                "Fill with topsoil and organic manure",
                "Plant seedlings at the same depth as in nursery",
                "Firm the soil around the base"
              ]
            }
          }
        },

        "intercropping": {
          "title": "Intercropping & Mixed Cropping",
          "content": {

            "suitableCrops": {
              "title": "Suitable Intercrops",
              "points": [
                "Banana (first 3-4 years)",
                "Turmeric (shade-tolerant)",
                "Ginger (shade-tolerant)",
                "Black pepper (climber)"
              ]
            },

            "benefits": {
              "title": "Mixed Cropping Benefits",
              "points": [
                "Additional income during early years",
                "Better soil fertility management",
                "Reduced weed growth",
                "Optimal use of space and resources"
              ]
            }
          }
        },

        "nutrientManagement": {
          "title": "Nutrient Management",
          "content": {

            "schedule": {
              "title": "Fertilizer Schedule",

              "schedule": [

                {
                  "age": "1-3 years",
                  "nitrogen": "50 g/plant",
                  "phosphorus": "20 g/plant",
                  "potassium": "70 g/plant",
                  "organicManure": "10 kg/plant"
                },

                {
                  "age": "4-7 years",
                  "nitrogen": "100 g/plant",
                  "phosphorus": "40 g/plant",
                  "potassium": "140 g/plant",
                  "organicManure": "20 kg/plant"
                },

                {
                  "age": "8+ years",
                  "nitrogen": "150 g/plant",
                  "phosphorus": "60 g/plant",
                  "potassium": "200 g/plant",
                  "organicManure": "30 kg/plant"
                }

              ]
            }
          }
        },

        "waterManagement": {
          "title": "Water Management",
          "content": {

            "irrigation": {
              "title": "Irrigation Requirements",
              "points": [
                "Regular watering during dry spells",
                "Frequency: Once every 4-6 days",
                "Amount: 40-50 liters per plant",
                "Use drip irrigation for efficiency"
              ]
            },

            "drainage": {
              "title": "Drainage Management",
              "points": [
                "Maintain proper drainage channels",
                "Prevent waterlogging",
                "Regular cleaning of drains",
                "Mulching to conserve moisture"
              ]
            }
          }
        }

      }
    }
    """;
}