import React, { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const translations = {
  en: {
    nav: {
      home: "Home",
      cultivation: "Cultivation",
      disease: "Disease Management",
      market: "Market Prices",
      schemes: "Govt. Schemes"
    },
    cultivation: {
      title: "Arecanut Cultivation Guide 🌱",
      subtitle: "Comprehensive guide for successful arecanut farming",
      sections: {
        landPreparation: {
          title: "Land Preparation",
          content: {
            siteSelection: {
              title: "Site Selection",
              points: [
                "Choose well-drained, fertile soil with good water-holding capacity",
                "Red loam, lateritic loam, or alluvial loam soils are ideal",
                "Soil pH should be between 6.0 and 7.0",
                "Avoid waterlogged, alkaline, or heavy clay soils"
              ]
            },
            landClearing: {
              title: "Land Clearing",
              points: [
                "Remove existing vegetation and debris",
                "Plough the land to a depth of 30-45 cm",
                "Harrow the soil to break clods and level the surface",
                "Mark planting pits at recommended spacing (2.7m x 2.7m)"
              ]
            },
            shadeManagement: {
              title: "Shade Management",
              points: [
                "Plant shade trees on western and southern borders",
                "Recommended shade trees: Jack, Neem, Pongamia, Mahagani, Silver Oak",
                "Maintain 40-50% shade during early growth stages",
                "Reduce shade to 30% after 5 years"
              ]
            }
          }
        },
        varietalDescription: {
          title: "Varietal Description",
          content: {
            popularVarieties: {
              title: "Popular Varieties",
              varieties: [
                {
                  name: "Mangala",
                  characteristics: "Medium tall, round small nuts",
                  yield: "3.0 kg/plant",
                  region: "Coastal"
                },
                {
                  name: "Sumangala",
                  characteristics: "Tall, round big nuts",
                  yield: "3.18 kg/plant",
                  region: "Coastal"
                },
                {
                  name: "Thirthahalli",
                  characteristics: "Local tall, long nuts",
                  yield: "3.6 kg/plant",
                  region: "Malnad"
                },
                {
                  name: "Srivardhana",
                  characteristics: "Round medium nuts",
                  yield: "2.0 kg/plant",
                  region: "All regions"
                }
              ]
            }
          }
        },
        raisingSeedlings: {
          title: "Raising Seedlings",
          content: {
            motherPalm: {
              title: "Mother Palm Selection",
              points: [
                "Select 20-40 years old healthy palms",
                "Choose palms with consistent high yield",
                "Ensure disease-free mother palms",
                "Select from best performing gardens in the locality"
              ]
            },
            nurseryManagement: {
              title: "Nursery Management",
              points: [
                "Prepare raised beds with well-drained soil",
                "Maintain 50% shade in nursery",
                "Regular watering and weeding",
                "Protect from pests and diseases"
              ]
            }
          }
        },
        planting: {
          title: "Planting",
          content: {
            season: {
              title: "Planting Season",
              points: [
                "Best time: June-July (onset of monsoon)",
                "Avoid planting during heavy rains",
                "Ensure adequate soil moisture",
                "Plant in the morning hours"
              ]
            },
            method: {
              title: "Planting Method",
              points: [
                "Dig pits of size 60cm x 60cm x 60cm",
                "Fill with topsoil and organic manure",
                "Plant seedlings at the same depth as in nursery",
                "Firm the soil around the base"
              ]
            }
          }
        },
        intercropping: {
          title: "Intercropping & Mixed Cropping",
          content: {
            suitableCrops: {
              title: "Suitable Intercrops",
              points: [
                "Banana (first 3-4 years)",
                "Turmeric (shade-tolerant)",
                "Ginger (shade-tolerant)",
                "Black pepper (climber)"
              ]
            },
            benefits: {
              title: "Mixed Cropping Benefits",
              points: [
                "Additional income during early years",
                "Better soil fertility management",
                "Reduced weed growth",
                "Optimal use of space and resources"
              ]
            }
          }
        },
        nutrientManagement: {
          title: "Nutrient Management",
          content: {
            schedule: {
              title: "Fertilizer Schedule",
              schedule: [
                {
                  age: "1-3 years",
                  nitrogen: "50 g/plant",
                  phosphorus: "20 g/plant",
                  potassium: "70 g/plant",
                  organicManure: "10 kg/plant"
                },
                {
                  age: "4-7 years",
                  nitrogen: "100 g/plant",
                  phosphorus: "40 g/plant",
                  potassium: "140 g/plant",
                  organicManure: "20 kg/plant"
                },
                {
                  age: "8+ years",
                  nitrogen: "150 g/plant",
                  phosphorus: "60 g/plant",
                  potassium: "200 g/plant",
                  organicManure: "30 kg/plant"
                }
              ]
            }
          }
        },
        waterManagement: {
          title: "Water Management",
          content: {
            irrigation: {
              title: "Irrigation Requirements",
              points: [
                "Regular watering during dry spells",
                "Frequency: Once every 4-6 days",
                "Amount: 40-50 liters per plant",
                "Use drip irrigation for efficiency"
              ]
            },
            drainage: {
              title: "Drainage Management",
              points: [
                "Maintain proper drainage channels",
                "Prevent waterlogging",
                "Regular cleaning of drains",
                "Mulching to conserve moisture"
              ]
            }
          }
        }
      }
    },
    disease: {
      title: "Disease Management 🦠",
      subtitle: "Select a disease to view detailed information and management practices.",
      sections: {
        yellowLeaf: {
          title: "Yellow Leaf Disease",
          content: {
            symptoms: {
              title: "Symptoms",
              points: [
                "Yellowing of leaves starting from tip",
                "Premature leaf fall",
                "Reduced nut size and yield",
                "Stunted growth",
              ],
            },
            causes: {
              title: "Causes",
              points: [
                "Phytoplasma infection",
                "Insect vectors (leafhoppers)",
                "Poor soil nutrition",
                "Water stress",
              ],
            },
            management: {
              title: "Management",
              points: [
                "Remove and destroy infected palms",
                "Control leafhopper vectors",
                "Apply balanced fertilizers",
                "Maintain proper irrigation",
                "Use disease-free planting material",
              ],
            },
            preventive: {
              title: "Preventive Measures",
              points: [
                "Regular monitoring of garden",
                "Maintain garden hygiene",
                "Proper spacing between palms",
                "Use resistant varieties",
              ],
            },
          }
        },
        budRot: {
          title: "Bud Rot",
          content: {
            symptoms: {
              title: "Symptoms",
              points: [
                "Softening of terminal bud",
                "Foul smell from rotting tissue",
                "Yellowing of inner leaves",
                "Death of growing point",
              ],
            },
            causes: {
              title: "Causes",
              points: [
                "Phytophthora palmivora fungus",
                "Excessive moisture",
                "Poor drainage",
                "Wound infection",
              ],
            },
            management: {
              title: "Management",
              points: [
                "Remove infected tissue",
                "Apply Bordeaux mixture",
                "Improve drainage",
                "Reduce shade density",
                "Use fungicides as per recommendation",
              ],
            },
            preventive: {
              title: "Preventive Measures",
              points: [
                "Maintain proper drainage",
                "Avoid mechanical injury",
                "Regular garden inspection",
                "Proper spacing and ventilation",
              ],
            },
          }
        },
        footRot: {
          title: "Foot Rot",
          content: {
            symptoms: {
              title: "Symptoms",
              points: [
                "Softening of stem base",
                "Yellowing of lower leaves",
                "Root decay",
                "Wilting of crown",
              ],
            },
            causes: {
              title: "Causes",
              points: [
                "Ganoderma lucidum fungus",
                "Waterlogging",
                "Poor soil drainage",
                "Root injury",
              ],
            },
            management: {
              title: "Management",
              points: [
                "Remove infected palms",
                "Improve drainage",
                "Apply fungicides",
                "Maintain proper soil pH",
                "Use disease-free planting material",
              ],
            },
            preventive: {
              title: "Preventive Measures",
              points: [
                "Proper land preparation",
                "Good drainage system",
                "Regular inspection",
                "Maintain garden hygiene",
              ],
            },
          }
        }
      }
    },
    schemes: {
      title: "Government Schemes 🏛️",
      subtitle: "Explore various government schemes and support programs for arecanut farmers.",
      sections: {
        pmKisan: {
          title: "PM-KISAN Scheme",
          content: {
            description: {
              title: "Overview",
              text: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a central sector scheme with 100% funding from the Government of India.",
            },
            benefits: {
              title: "Benefits",
              points: [
                "Direct income support of ₹6,000 per year",
                "Paid in three equal installments of ₹2,000",
                "Beneficial for small and marginal farmers",
                "Helps in meeting agricultural expenses",
              ],
            },
            eligibility: {
              title: "Eligibility",
              points: [
                "Small and marginal farmer families",
                "Family should have cultivable landholding",
                "All landholding farmer families",
                "No minimum landholding requirement",
              ],
            },
            application: {
              title: "How to Apply",
              points: [
                "Visit nearest Common Service Centre (CSC)",
                "Submit required documents",
                "Fill PM-KISAN form",
                "Link Aadhaar number",
              ],
            },
          }
        },
        soilHealth: {
          title: "Soil Health Card Scheme",
          content: {
            description: {
              title: "Overview",
              text: "A scheme to help farmers understand the health of their soil and get recommendations for appropriate fertilizers.",
            },
            benefits: {
              title: "Benefits",
              points: [
                "Free soil testing",
                "Detailed soil health report",
                "Fertilizer recommendations",
                "Updated every 3 years",
              ],
            },
            eligibility: {
              title: "Eligibility",
              points: [
                "All farmers are eligible",
                "No landholding limit",
                "Both individual and group applications accepted",
                "Priority for small and marginal farmers",
              ],
            },
            application: {
              title: "How to Apply",
              points: [
                "Contact nearest agriculture office",
                "Submit soil sample",
                "Get soil health card",
                "Follow recommendations",
              ],
            },
          }
        },
        cropInsurance: {
          title: "National Mission for Sustainable Agriculture",
          content: {
            description: {
              title: "Overview",
              text: "A program to promote sustainable agriculture practices and enhance agricultural productivity.",
            },
            benefits: {
              title: "Benefits",
              points: [
                "Subsidy for organic farming",
                "Support for water conservation",
                "Training in sustainable practices",
                "Financial assistance for equipment",
              ],
            },
            eligibility: {
              title: "Eligibility",
              points: [
                "Individual farmers",
                "Farmer groups",
                "Self-help groups",
                "Non-governmental organizations",
              ],
            },
            application: {
              title: "How to Apply",
              points: [
                "Contact agriculture department",
                "Submit project proposal",
                "Get technical guidance",
                "Receive financial support",
              ],
            },
          }
        }
      }
    }
  },
  kn: {
    nav: {
      home: "ಮುಖಪುಟ",
      cultivation: "ಬೆಳೆಸುವಿಕೆ ಮಾರ್ಗದರ್ಶಿ",
      disease: "ರೋಗ ನಿರ್ವಹಣೆ",
      market: "ಮಾರುಕಟ್ಟೆ ಬೆಲೆಗಳು",
      schemes: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು"
    },
    cultivation: {
      title: "ಅಡಿಕೆ ಬೆಳೆಸುವಿಕೆ ಮಾರ್ಗದರ್ಶಿ 🌱",
      subtitle: "ಯಶಸ್ವಿ ಅಡಿಕೆ ಕೃಷಿಗಾಗಿ ಸಮಗ್ರ ಮಾರ್ಗದರ್ಶಿ",
      sections: {
        landPreparation: {
          title: "ಭೂಮಿ ತಯಾರಿಕೆ",
          content: {
            siteSelection: {
              title: "ಸ್ಥಳ ಆಯ್ಕೆ",
              points: [
                "ಉತ್ತಮ ನೀರು ಹಿಡಿದಿಟ್ಟುಕೊಳ್ಳುವ ಸಾಮರ್ಥ್ಯ ಹೊಂದಿರುವ ಫಲವತ್ತಾದ, ಚೆನ್ನಾಗಿ ಹರಿಯುವ ಮಣ್ಣನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                "ಕೆಂಪು ಲೋಮ್, ಲ್ಯಾಟರೈಟಿಕ್ ಲೋಮ್ ಅಥವಾ ಅಲ್ಯುವಿಯಲ್ ಲೋಮ್ ಮಣ್ಣುಗಳು ಸೂಕ್ತ",
                "ಮಣ್ಣಿನ pH 6.0 ಮತ್ತು 7.0 ನಡುವೆ ಇರಬೇಕು",
                "ನೀರು ನಿಲ್ಲುವ, ಕ್ಷಾರೀಯ ಅಥವಾ ಭಾರೀ ಜೇಡಿಮಣ್ಣುಗಳನ್ನು ತಪ್ಪಿಸಿ"
              ]
            },
            landClearing: {
              title: "ಭೂಮಿ ಸ್ವಚ್ಛಗೊಳಿಸುವಿಕೆ",
              points: [
                "ಅಸ್ತಿತ್ವದಲ್ಲಿರುವ ಸಸ್ಯಗಳನ್ನು ಮತ್ತು ಕಸವನ್ನು ತೆಗೆದುಹಾಕಿ",
                "30-45 ಸೆಂ.ಮೀ ಆಳಕ್ಕೆ ಭೂಮಿಯನ್ನು ಉಳುಮೆ ಮಾಡಿ",
                "ಕಡ್ಡಿಗಳನ್ನು ಮುರಿಯಲು ಮತ್ತು ಮೇಲ್ಮೈಯನ್ನು ಸಮ ಮಾಡಲು ಮಣ್ಣನ್ನು ಹರಾವು ಮಾಡಿ",
                "ಶಿಫಾರಸು ಮಾಡಿದ ಅಂತರದಲ್ಲಿ (2.7m x 2.7m) ನೆಡುವಿಕೆ ಗುಂಡಿಗಳನ್ನು ಗುರುತಿಸಿ"
              ]
            },
            shadeManagement: {
              title: "ನೆರಳು ನಿರ್ವಹಣೆ",
              points: [
                "ಪಶ್ಚಿಮ ಮತ್ತು ದಕ್ಷಿಣ ಗಡಿಗಳಲ್ಲಿ ನೆರಳು ಮರಗಳನ್ನು ನೆಡಿ",
                "ಶಿಫಾರಸು ಮಾಡಿದ ನೆರಳು ಮರಗಳು: ಜಾಕ್, ಬೇವು, ಹೊಂಗೆ, ಮಹಾಗನಿ, ಸಿಲ್ವರ್ ಓಕ್",
                "ಆರಂಭಿಕ ಬೆಳವಣಿಗೆಯ ಹಂತಗಳಲ್ಲಿ 40-50% ನೆರಳನ್ನು ನಿರ್ವಹಿಸಿ",
                "5 ವರ್ಷಗಳ ನಂತರ ನೆರಳನ್ನು 30% ಕ್ಕೆ ಕಡಿಮೆ ಮಾಡಿ"
              ]
            }
          }
        },
        varietalDescription: {
          title: "ವಿಧ ವಿವರಣೆ",
          content: {
            popularVarieties: {
              title: "ಜನಪ್ರಿಯ ವಿಧಗಳು",
              varieties: [
                {
                  name: "ಮಂಗಳ",
                  characteristics: "ಮಧ್ಯಮ ಎತ್ತರ, ದುಂಡು ಸಣ್ಣ ಕಾಯಿಗಳು",
                  yield: "3.0 ಕೆಜಿ/ಮರ",
                  region: "ತೀರಪ್ರದೇಶ"
                },
                {
                  name: "ಸುಮಂಗಳ",
                  characteristics: "ಎತ್ತರ, ದುಂಡು ದೊಡ್ಡ ಕಾಯಿಗಳು",
                  yield: "3.18 ಕೆಜಿ/ಮರ",
                  region: "ತೀರಪ್ರದೇಶ"
                },
                {
                  name: "ತೀರ್ಥಹಳ್ಳಿ",
                  characteristics: "ಸ್ಥಳೀಯ ಎತ್ತರ, ಉದ್ದ ಕಾಯಿಗಳು",
                  yield: "3.6 ಕೆಜಿ/ಮರ",
                  region: "ಮಲೆನಾಡು"
                },
                {
                  name: "ಶ್ರೀವರ್ಧನ",
                  characteristics: "ದುಂಡು ಮಧ್ಯಮ ಕಾಯಿಗಳು",
                  yield: "2.0 ಕೆಜಿ/ಮರ",
                  region: "ಎಲ್ಲಾ ಪ್ರದೇಶಗಳು"
                }
              ]
            }
          }
        },
        raisingSeedlings: {
          title: "ಸಸಿಗಳನ್ನು ಬೆಳೆಸುವಿಕೆ",
          content: {
            motherPalm: {
              title: "ತಾಯಿ ತಾಳೆ ಆಯ್ಕೆ",
              points: [
                "20-40 ವರ್ಷ ವಯಸ್ಸಿನ ಆರೋಗ್ಯಕರ ತಾಳೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                "ನಿರಂತರ ಹೆಚ್ಚಿನ ಇಳುವರಿ ನೀಡುವ ತಾಳೆಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ",
                "ರೋಗರಹಿತ ತಾಯಿ ತಾಳೆಗಳನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
                "ಸ್ಥಳೀಯ ಪ್ರದೇಶದ ಅತ್ಯುತ್ತಮ ಕಾರ್ಯಕ್ಷಮತೆಯ ತೋಟಗಳಿಂದ ಆಯ್ಕೆಮಾಡಿ"
              ]
            },
            nurseryManagement: {
              title: "ನರ್ಸರಿ ನಿರ್ವಹಣೆ",
              points: [
                "ಚೆನ್ನಾಗಿ ಹರಿಯುವ ಮಣ್ಣಿನೊಂದಿಗೆ ಎತ್ತರಿಸಿದ ಹಾಸುಗಳನ್ನು ತಯಾರಿಸಿ",
                "ನರ್ಸರಿಯಲ್ಲಿ 50% ನೆರಳನ್ನು ನಿರ್ವಹಿಸಿ",
                "ನಿಯಮಿತ ನೀರುಹಾಕುವಿಕೆ ಮತ್ತು ಕಳೆ ತೆಗೆಯುವಿಕೆ",
                "ಕೀಟಗಳು ಮತ್ತು ರೋಗಗಳಿಂದ ರಕ್ಷಿಸಿ"
              ]
            }
          }
        },
        planting: {
          title: "ನೆಡುವಿಕೆ",
          content: {
            season: {
              title: "ನೆಡುವಿಕೆ ಋತು",
              points: [
                "ಉತ್ತಮ ಸಮಯ: ಜೂನ್-ಜುಲೈ (ಮಳೆಗಾಲದ ಆರಂಭ)",
                "ಭಾರೀ ಮಳೆಯ ಸಮಯದಲ್ಲಿ ನೆಡುವಿಕೆಯನ್ನು ತಪ್ಪಿಸಿ",
                "ಸಾಕಷ್ಟು ಮಣ್ಣಿನ ತೇವಾಂಶವನ್ನು ಖಚಿತಪಡಿಸಿಕೊಳ್ಳಿ",
                "ಬೆಳಿಗ್ಗೆ ನೆಡಿ"
              ]
            },
            method: {
              title: "ನೆಡುವಿಕೆ ವಿಧಾನ",
              points: [
                "60ಸೆಂ x 60ಸೆಂ x 60ಸೆಂ ಗುಂಡಿಗಳನ್ನು ತೋಡಿ",
                "ಮೇಲ್ಮಣ್ಣು ಮತ್ತು ಸಾವಯವ ಗೊಬ್ಬರದೊಂದಿಗೆ ತುಂಬಿ",
                "ನರ್ಸರಿಯಲ್ಲಿರುವಂತೆಯೇ ಆಳದಲ್ಲಿ ಸಸಿಗಳನ್ನು ನೆಡಿ",
                "ಅಡಿಭಾಗದಲ್ಲಿ ಮಣ್ಣನ್ನು ಗಟ್ಟಿಗೊಳಿಸಿ"
              ]
            }
          }
        },
        intercropping: {
          title: "ಅಂತರ ಬೆಳೆಸುವಿಕೆ ಮತ್ತು ಮಿಶ್ರ ಬೆಳೆಸುವಿಕೆ",
          content: {
            suitableCrops: {
              title: "ಸೂಕ್ತ ಅಂತರ ಬೆಳೆಗಳು",
              points: [
                "ಬಾಳೆ (ಮೊದಲ 3-4 ವರ್ಷಗಳು)",
                "ಅರಿಶಿನ (ನೆರಳನ್ನು ಸಹಿಸುವ)",
                "ಶುಂಠಿ (ನೆರಳನ್ನು ಸಹಿಸುವ)",
                "ಕರಿಮೆಣಸು (ಬಳ್ಳಿ)"
              ]
            },
            benefits: {
              title: "ಮಿಶ್ರ ಬೆಳೆಸುವಿಕೆಯ ಪ್ರಯೋಜನಗಳು",
              points: [
                "ಆರಂಭಿಕ ವರ್ಷಗಳಲ್ಲಿ ಹೆಚ್ಚುವರಿ ಆದಾಯ",
                "ಉತ್ತಮ ಮಣ್ಣಿನ ಫಲವತ್ತತೆ ನಿರ್ವಹಣೆ",
                "ಕಳೆ ಬೆಳವಣಿಗೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ",
                "ಸ್ಥಳ ಮತ್ತು ಸಂಪನ್ಮೂಲಗಳ ಅತ್ಯುತ್ತಮ ಬಳಕೆ"
              ]
            }
          }
        },
        nutrientManagement: {
          title: "ಪೋಷಕಾಂಶ ನಿರ್ವಹಣೆ",
          content: {
            schedule: {
              title: "ಗೊಬ್ಬರ ವೇಳಾಪಟ್ಟಿ",
              schedule: [
                {
                  age: "1-3 ವರ್ಷಗಳು",
                  nitrogen: "50 ಗ್ರಾಂ/ಮರ",
                  phosphorus: "20 ಗ್ರಾಂ/ಮರ",
                  potassium: "70 ಗ್ರಾಂ/ಮರ",
                  organicManure: "10 ಕೆಜಿ/ಮರ"
                },
                {
                  age: "4-7 ವರ್ಷಗಳು",
                  nitrogen: "100 ಗ್ರಾಂ/ಮರ",
                  phosphorus: "40 ಗ್ರಾಂ/ಮರ",
                  potassium: "140 ಗ್ರಾಂ/ಮರ",
                  organicManure: "20 ಕೆಜಿ/ಮರ"
                },
                {
                  age: "8+ ವರ್ಷಗಳು",
                  nitrogen: "150 ಗ್ರಾಂ/ಮರ",
                  phosphorus: "60 ಗ್ರಾಂ/ಮರ",
                  potassium: "200 ಗ್ರಾಂ/ಮರ",
                  organicManure: "30 ಕೆಜಿ/ಮರ"
                }
              ]
            }
          }
        },
        waterManagement: {
          title: "ನೀರು ನಿರ್ವಹಣೆ",
          content: {
            irrigation: {
              title: "ನೀರುಹಾಕುವಿಕೆ ಅವಶ್ಯಕತೆಗಳು",
              points: [
                "ಬರಗಾಲದಲ್ಲಿ ನಿಯಮಿತ ನೀರುಹಾಕುವಿಕೆ",
                "ಆವರ್ತನ: ಪ್ರತಿ 4-6 ದಿನಗಳಿಗೊಮ್ಮೆ",
                "ಪ್ರಮಾಣ: ಮರಕ್ಕೆ 40-50 ಲೀಟರ್",
                "ದಕ್ಷತೆಗಾಗಿ ಟೊಳ್ಳು ನೀರುಹಾಕುವಿಕೆಯನ್ನು ಬಳಸಿ"
              ]
            },
            drainage: {
              title: "ನೀರು ಹರಿಯುವಿಕೆ ನಿರ್ವಹಣೆ",
              points: [
                "ಸರಿಯಾದ ನೀರು ಹರಿಯುವಿಕೆಯ ಕಾಲುವೆಗಳನ್ನು ನಿರ್ವಹಿಸಿ",
                "ನೀರು ನಿಲ್ಲುವಿಕೆಯನ್ನು ತಡೆಯಿರಿ",
                "ಕಾಲುವೆಗಳನ್ನು ನಿಯಮಿತವಾಗಿ ಸ್ವಚ್ಛಗೊಳಿಸಿ",
                "ತೇವಾಂಶವನ್ನು ಉಳಿಸಿಕೊಳ್ಳಲು ಮಲ್ಚಿಂಗ್ ಮಾಡಿ"
              ]
            }
          }
        }
      }
    },
    disease: {
      title: "ರೋಗ ನಿರ್ವಹಣೆ 🦠",
      subtitle: "ವಿವರವಾದ ಮಾಹಿತಿ ಮತ್ತು ನಿರ್ವಹಣೆ ಕ್ರಮಗಳನ್ನು ವೀಕ್ಷಿಸಲು ರೋಗವನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      sections: {
        yellowLeaf: {
          title: "ಹಳದಿ ಎಲೆ ರೋಗ",
          content: {
            symptoms: {
              title: "ಲಕ್ಷಣಗಳು",
              points: [
                "ಎಲೆಯ ತುದಿಯಿಂದ ಹಳದಿ ಬಣ್ಣ ಬರುವುದು",
                "ಅಕಾಲಿಕ ಎಲೆ ಬೀಳುವಿಕೆ",
                "ಕಾಯಿ ಗಾತ್ರ ಮತ್ತು ಇಳುವರಿ ಕಡಿಮೆಯಾಗುವುದು",
                "ಬೆಳವಣಿಗೆ ನಿಧಾನವಾಗುವುದು",
              ],
            },
            causes: {
              title: "ಕಾರಣಗಳು",
              points: [
                "ಫೈಟೋಪ್ಲಾಸ್ಮಾ ಸೋಂಕು",
                "ಕೀಟ ವಾಹಕಗಳು (ಲೀಫ್ಹಾಪರ್ಸ್)",
                "ಮಣ್ಣಿನ ಪೋಷಕಾಂಶದ ಕೊರತೆ",
                "ನೀರಿನ ಒತ್ತಡ",
              ],
            },
            management: {
              title: "ನಿರ್ವಹಣೆ",
              points: [
                "ಸೋಂಕಿತ ತಾಳೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ ನಾಶಮಾಡಿ",
                "ಲೀಫ್ಹಾಪರ್ ವಾಹಕಗಳನ್ನು ನಿಯಂತ್ರಿಸಿ",
                "ಸಮತೋಲಿತ ಗೊಬ್ಬರಗಳನ್ನು ಹಾಕಿ",
                "ಸರಿಯಾದ ನೀರಾವರಿ ಕಾಪಾಡಿಕೊಳ್ಳಿ",
                "ರೋಗರಹಿತ ನೆಡುವ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ",
              ],
            },
            preventive: {
              title: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು",
              points: [
                "ತೋಟದ ನಿಯಮಿತ ಮೇಲ್ವಿಚಾರಣೆ",
                "ತೋಟದ ಸ್ವಚ್ಛತೆ ಕಾಪಾಡಿಕೊಳ್ಳಿ",
                "ತಾಳೆಗಳ ನಡುವೆ ಸರಿಯಾದ ಅಂತರ",
                "ರೋಗನಿರೋಧಕ ತಳಿಗಳನ್ನು ಬಳಸಿ",
              ],
            },
          }
        },
        budRot: {
          title: "ಕುಡಿ ಕೊಳೆತ",
          content: {
            symptoms: {
              title: "ಲಕ್ಷಣಗಳು",
              points: [
                "ಕುಡಿಯ ಮೃದುವಾಗುವಿಕೆ",
                "ಕೊಳೆತ ಅಂಗಾಂಶದಿಂದ ಕೆಟ್ಟ ವಾಸನೆ",
                "ಒಳಗಿನ ಎಲೆಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವುದು",
                "ಬೆಳೆಯುವ ಬಿಂದುವಿನ ಸಾವು",
              ],
            },
            causes: {
              title: "ಕಾರಣಗಳು",
              points: [
                "ಫೈಟೋಫ್ತೋರಾ ಪಾಲ್ಮಿವೋರಾ ಬೂಷ್ಟು",
                "ಹೆಚ್ಚಿನ ತೇವಾಂಶ",
                "ಕಳಪೆ ಜಲನಿಕಾಸ",
                "ಗಾಯದ ಸೋಂಕು",
              ],
            },
            management: {
              title: "ನಿರ್ವಹಣೆ",
              points: [
                "ಸೋಂಕಿತ ಅಂಗಾಂಶವನ್ನು ತೆಗೆದುಹಾಕಿ",
                "ಬೋರ್ಡೋ ಮಿಶ್ರಣವನ್ನು ಹಾಕಿ",
                "ಜಲನಿಕಾಸವನ್ನು ಸುಧಾರಿಸಿ",
                "ನೆರಳಿನ ಸಾಂದ್ರತೆಯನ್ನು ಕಡಿಮೆ ಮಾಡಿ",
                "ಶಿಫಾರಸು ಮಾಡಿದಂತೆ ಫಂಗಿಸೈಡ್ಗಳನ್ನು ಬಳಸಿ",
              ],
            },
            preventive: {
              title: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು",
              points: [
                "ಸರಿಯಾದ ಜಲನಿಕಾಸ ಕಾಪಾಡಿಕೊಳ್ಳಿ",
                "ಯಾಂತ್ರಿಕ ಗಾಯಗಳನ್ನು ತಪ್ಪಿಸಿ",
                "ತೋಟದ ನಿಯಮಿತ ಪರಿಶೀಲನೆ",
                "ಸರಿಯಾದ ಅಂತರ ಮತ್ತು ಗಾಳಿ ಸಂಚಾರ",
              ],
            },
          }
        },
        footRot: {
          title: "ಕಾಲು ಕೊಳೆತ",
          content: {
            symptoms: {
              title: "ಲಕ್ಷಣಗಳು",
              points: [
                "ಕಾಂಡದ ತಳಭಾಗ ಮೃದುವಾಗುವುದು",
                "ಕೆಳಗಿನ ಎಲೆಗಳು ಹಳದಿ ಬಣ್ಣಕ್ಕೆ ತಿರುಗುವುದು",
                "ಬೇರು ಕೊಳೆತ",
                "ಕಿರೀಟದ ಬಾಡುವಿಕೆ",
              ],
            },
            causes: {
              title: "ಕಾರಣಗಳು",
              points: [
                "ಗ್ಯಾನೋಡರ್ಮಾ ಲ್ಯೂಸಿಡಮ್ ಬೂಷ್ಟು",
                "ನೀರು ಸೇರುವಿಕೆ",
                "ಕಳಪೆ ಮಣ್ಣಿನ ಜಲನಿಕಾಸ",
                "ಬೇರು ಗಾಯ",
              ],
            },
            management: {
              title: "ನಿರ್ವಹಣೆ",
              points: [
                "ಸೋಂಕಿತ ತಾಳೆಗಳನ್ನು ತೆಗೆದುಹಾಕಿ",
                "ಜಲನಿಕಾಸವನ್ನು ಸುಧಾರಿಸಿ",
                "ಫಂಗಿಸೈಡ್ಗಳನ್ನು ಹಾಕಿ",
                "ಮಣ್ಣಿನ pH ಅನ್ನು ಸರಿಯಾಗಿ ಕಾಪಾಡಿಕೊಳ್ಳಿ",
                "ರೋಗರಹಿತ ನೆಡುವ ವಸ್ತುಗಳನ್ನು ಬಳಸಿ",
              ],
            },
            preventive: {
              title: "ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳು",
              points: [
                "ಸರಿಯಾದ ಭೂಮಿ ತಯಾರಿಕೆ",
                "ಉತ್ತಮ ಜಲನಿಕಾಸ ವ್ಯವಸ್ಥೆ",
                "ನಿಯಮಿತ ಪರಿಶೀಲನೆ",
                "ತೋಟದ ಸ್ವಚ್ಛತೆ ಕಾಪಾಡಿಕೊಳ್ಳಿ",
              ],
            },
          }
        }
      }
    },
    schemes: {
      title: "ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು 🏛️",
      subtitle: "ಅಡಿಕೆ ರೈತರಿಗಾಗಿ ವಿವಿಧ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು ಮತ್ತು ಬೆಂಬಲ ಕಾರ್ಯಕ್ರಮಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.",
      sections: {
        pmKisan: {
          title: "ಪಿಎಂ-ಕಿಸಾನ್ ಯೋಜನೆ",
          content: {
            description: {
              title: "ಅವಲೋಕನ",
              text: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಕಿಸಾನ್ ಸಮ್ಮಾನ್ ನಿಧಿ (ಪಿಎಂ-ಕಿಸಾನ್) ಭಾರತ ಸರ್ಕಾರದಿಂದ 100% ಹಣಕಾಸು ಪಡೆದ ಕೇಂದ್ರ ವಲಯ ಯೋಜನೆಯಾಗಿದೆ.",
            },
            benefits: {
              title: "ಲಾಭಗಳು",
              points: [
                "ವರ್ಷಕ್ಕೆ ₹6,000 ನೇರ ಆದಾಯ ಬೆಂಬಲ",
                "₹2,000 ರ ಮೂರು ಸಮಾನ ಕಂತುಗಳಲ್ಲಿ ಪಾವತಿ",
                "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಲಾಭದಾಯಕ",
                "ಕೃಷಿ ವೆಚ್ಚಗಳನ್ನು ಪೂರೈಸಲು ಸಹಾಯ",
              ],
            },
            eligibility: {
              title: "ಅರ್ಹತೆ",
              points: [
                "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತ ಕುಟುಂಬಗಳು",
                "ಕುಟುಂಬವು ಬೆಳೆಸಬಹುದಾದ ಭೂಮಿಯನ್ನು ಹೊಂದಿರಬೇಕು",
                "ಎಲ್ಲಾ ಭೂಮಿ ಹೊಂದಿರುವ ರೈತ ಕುಟುಂಬಗಳು",
                "ಕನಿಷ್ಠ ಭೂಮಿ ಹೊಂದಿರುವ ಅಗತ್ಯವಿಲ್ಲ",
              ],
            },
            application: {
              title: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ",
              points: [
                "ಹತ್ತಿರದ ಕಾಮನ್ ಸರ್ವಿಸ್ ಸೆಂಟರ್ (ಸಿಎಸ್ಸಿ) ಭೇಟಿ",
                "ಅಗತ್ಯ ದಾಖಲೆಗಳನ್ನು ಸಲ್ಲಿಸಿ",
                "ಪಿಎಂ-ಕಿಸಾನ್ ಫಾರ್ಮ್ ಭರ್ತಿ ಮಾಡಿ",
                "ಆಧಾರ್ ಸಂಖ್ಯೆಯನ್ನು ಲಿಂಕ್ ಮಾಡಿ",
              ],
            },
          }
        },
        soilHealth: {
          title: "ಮಣ್ಣಿನ ಆರೋಗ್ಯ ಕಾರ್ಡ್ ಯೋಜನೆ",
          content: {
            description: {
              title: "ಅವಲೋಕನ",
              text: "ರೈತರು ತಮ್ಮ ಮಣ್ಣಿನ ಆರೋಗ್ಯವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮತ್ತು ಸೂಕ್ತ ಗೊಬ್ಬರಗಳಿಗೆ ಶಿಫಾರಸುಗಳನ್ನು ಪಡೆಯಲು ಸಹಾಯ ಮಾಡುವ ಯೋಜನೆ.",
            },
            benefits: {
              title: "ಲಾಭಗಳು",
              points: [
                "ಉಚಿತ ಮಣ್ಣು ಪರೀಕ್ಷೆ",
                "ವಿವರವಾದ ಮಣ್ಣಿನ ಆರೋಗ್ಯ ವರದಿ",
                "ಗೊಬ್ಬರ ಶಿಫಾರಸುಗಳು",
                "ಪ್ರತಿ 3 ವರ್ಷಕ್ಕೊಮ್ಮೆ ನವೀಕರಣ",
              ],
            },
            eligibility: {
              title: "ಅರ್ಹತೆ",
              points: [
                "ಎಲ್ಲಾ ರೈತರು ಅರ್ಹರು",
                "ಭೂಮಿ ಹೊಂದಿರುವ ಮಿತಿಯಿಲ್ಲ",
                "ವೈಯಕ್ತಿಕ ಮತ್ತು ಗುಂಪು ಅರ್ಜಿಗಳು ಸ್ವೀಕಾರಾರ್ಹ",
                "ಸಣ್ಣ ಮತ್ತು ಅತಿ ಸಣ್ಣ ರೈತರಿಗೆ ಆದ್ಯತೆ",
              ],
            },
            application: {
              title: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ",
              points: [
                "ಹತ್ತಿರದ ಕೃಷಿ ಕಚೇರಿಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
                "ಯೋಜನಾ ಪ್ರಸ್ತಾಪವನ್ನು ಸಲ್ಲಿಸಿ",
                "ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
                "ಹಣಕಾಸು ಬೆಂಬಲ ಪಡೆಯಿರಿ",
              ],
            },
          }
        },
        cropInsurance: {
          title: "ಸುಸ್ಥಿರ ಕೃಷಿಗಾಗಿ ರಾಷ್ಟ್ರೀಯ ಮಿಷನ್",
          content: {
            description: {
              title: "ಅವಲೋಕನ",
              text: "ಸುಸ್ಥಿರ ಕೃಷಿ ಪದ್ಧತಿಗಳನ್ನು ಉತ್ತೇಜಿಸಲು ಮತ್ತು ಕೃಷಿ ಉತ್ಪಾದಕತೆಯನ್ನು ಹೆಚ್ಚಿಸಲು ಕಾರ್ಯಕ್ರಮ.",
            },
            benefits: {
              title: "ಲಾಭಗಳು",
              points: [
                "ಸಾವಯವ ಕೃಷಿಗೆ ಸಬ್ಸಿಡಿ",
                "ನೀರಿನ ಸಂರಕ್ಷಣೆಗೆ ಬೆಂಬಲ",
                "ಸುಸ್ಥಿರ ಪದ್ಧತಿಗಳಲ್ಲಿ ತರಬೇತಿ",
                "ಉಪಕರಣಗಳಿಗೆ ಹಣಕಾಸು ನೆರವು",
              ],
            },
            eligibility: {
              title: "ಅರ್ಹತೆ",
              points: [
                "ವೈಯಕ್ತಿಕ ರೈತರು",
                "ರೈತರ ಗುಂಪುಗಳು",
                "ಸ್ವಯಂ ಸಹಾಯ ಗುಂಪುಗಳು",
                "ಸರ್ಕಾರೇತರ ಸಂಸ್ಥೆಗಳು",
              ],
            },
            application: {
              title: "ಅರ್ಜಿ ಸಲ್ಲಿಸುವುದು ಹೇಗೆ",
              points: [
                "ಕೃಷಿ ಇಲಾಖೆಯನ್ನು ಸಂಪರ್ಕಿಸಿ",
                "ಯೋಜನಾ ಪ್ರಸ್ತಾಪವನ್ನು ಸಲ್ಲಿಸಿ",
                "ತಾಂತ್ರಿಕ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ",
                "ಹಣಕಾಸು ಬೆಂಬಲ ಪಡೆಯಿರಿ",
              ],
            },
          }
        }
      }
    }
  }
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'kn' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 