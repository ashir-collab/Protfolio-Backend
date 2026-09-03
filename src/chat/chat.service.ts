import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { portfolioContext } from './protfolio-context';

@Injectable()
export class ChatService {
  private readonly gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  async chat(message: string) {
    const response = await this.gemini.models.generateContent({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: portfolioContext,
      },
    });

    return {
      reply: response.text,
    };
  }
}
