// Устанавливаем переменные окружения
process.env.OPENAI_API_KEY = 'sk-599fc5d75d56423785e578a4337b1f4b';
process.env.PORT = process.env.PORT || 3001;

export const config = {
  apiKey: process.env.OPENAI_API_KEY,
  port: process.env.PORT
}; 