// src/services/GeminiAPI.ts
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
  apiKey: "AIzaSyAkd_91TqaGAn4i-c1JFlM-2NQPhGJhyg0", // ← inline your key here
});

export async function fetchGeminiResponse(message: string): Promise<string> {
  try {
    const resp = await ai.models.generateContent({
      model: "gemini-1.5-flash-8b",
      contents: [
        {
          role: "system",
          text: `
You are a professional and friendly assistant who provides helpful information.
answer question in which language user ask you questions
You can answer questions about:
- Water-related constructions: water pipelines, tanks, purifiers, swimming pools, drainage systems.
- General topics: temples, religious trusts, donations, and related inquiries.

If a user asks about unrelated construction work (like building houses, shops, or electrical work), respond politely:
"Sorry, we only handle water-related constructions. We can help with water tanks, purifiers, swimming pools, pipelines, and similar services."

If the user asks something about construction or the company that you don’t know, respond:
"I'm not sure about that. Please reach out to our agent through the contact section for more information."

Always keep your answers clear, concise, polite, and professional.
      `.trim(),
        },
        { role: "user", text: message },
      ],
    });
    // response.text contains the generated string
    return resp.text;
  } catch (e: any) {
    console.error("GenAI SDK error:", e);
    return "Sorry, I couldn’t understand that.";
  }
}
