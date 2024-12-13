const API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCO0R5N0p_FklEypIy00bnD7Evi00m9Ctw";

export const getAIResponse = async (userMessage) => {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [{ text: userMessage }],
          },
        ],
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("API Error:", errorData);
      return "Error retrieving response.";
    }

    const data = await response.json();
    console.log(data); // Log response to inspect it

    if (data?.candidates && data.candidates.length > 0) {
      return data.candidates[0]?.content?.parts[0]?.text || "No content";
    } else {
      return "No candidates found";
    }
  } catch (error) {
    console.error("Error fetching AI response:", error);
    return "Error retrieving response.";
  }
};
