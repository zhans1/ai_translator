import OpenAI from 'openai';
import { config } from '../config.js';

export class TranslationService {
  constructor() {
    this.openai = new OpenAI({
      apiKey: config.apiKey,
      baseURL: 'https://dashscope-intl.aliyuncs.com/compatible-mode/v1'
    });
  }

  async translate(text, sourceLang, targetLang, style) {
    try {
      const completion = await this.openai.chat.completions.create({
        model: 'qwen-max',
        messages: [
          { role: 'system', content: 'You are a professional translator.' },
          { 
            role: 'user', 
            content: `Translate the following text from ${sourceLang} to ${targetLang} in ${style} style:\n\n${text}` 
          }
        ],
      });
      
      return completion.choices[0].message.content;
    } catch (error) {
      console.error('Translation API error:', error);
      throw new Error('Translation failed: ' + error.message);
    }
  }
} 