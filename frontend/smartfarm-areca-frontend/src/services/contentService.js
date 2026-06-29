const BASE_URL = "http://localhost:8080/api/content";

export const fetchContent = async (
  moduleType,
  languageCode
) => {

  try {

    const response = await fetch(
      `${BASE_URL}/${moduleType}/${languageCode}`
    );

    if (!response.ok) {
      throw new Error("Failed to fetch content");
    }

    return await response.json();

  } catch (error) {

    console.error(
      "Error fetching content:",
      error
    );

    return [];

  }
};