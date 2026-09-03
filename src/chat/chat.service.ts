import { Injectable } from '@nestjs/common';
import { GoogleGenAI } from '@google/genai';
import { portfolioContext } from './protfolio-context';

@Injectable()
export class ChatService {
  private readonly gemini = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
  });

  async *chat(message: string) {
    const stream = await this.gemini.models.generateContentStream({
      model: 'gemini-3.6-flash',
      contents: message,
      config: {
        systemInstruction: portfolioContext,
      },
    });

    for await (const chunk of stream) {
      if (chunk.text) {
        yield chunk.text;
      }
    }
  }
}
