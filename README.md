# AI Translator

A modern web application that provides AI-powered translation services with style customization options. Built with React, Node.js, and powered by Qwen-Max API.

## ✨ Features

- 🌐 Translation between multiple languages (Russian, English, Spanish, French, German, Italian, Chinese, Japanese)
- 🎨 Multiple translation styles:
  - Formal
  - Informal
  - Business Letter
  - Flirty
- 🌓 Dark/Light theme support
- 📱 Responsive design
- ⚡ Real-time translation
- 🔄 Language swap functionality
- 💾 Local translation history
- 🎯 Clean and intuitive interface

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router DOM
- Tailwind CSS
- Lucide Icons
- Class Variance Authority

### Backend
- Node.js
- Express.js
- OpenAI SDK (for Qwen-Max API)
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Qwen-Max API key

### Installation

1. Clone the repository
bash
git clone https://github.com/yourusername/ai-translator.git 

2. Install dependencies for both frontend and backend
cd client
npm install
cd server
npm install

3. Create a `.env` file in the server directory
OPENAI_API_KEY=your_api_key_here
PORT=3001

4. Start the server
bash
cd server
npm start

5. Start the client
bash
cd client
npm start


The application will be available at `http://localhost:3000`

## 📝 Usage

1. Select source and target languages from the dropdown menus
2. Enter the text you want to translate
3. Choose your preferred translation style (Formal, Informal, Business, Flirty)
4. Click the "Translate" button
5. Use the swap button (🔄) to switch between languages
6. Toggle between dark and light themes using the theme button (🌞/🌙)

## 🎯 API Endpoints

### Translation Endpoint
- **POST** `/api/translate`
  - Body:
    ```json
    {
      "text": "Text to translate",
      "sourceLang": "ru",
      "targetLang": "en",
      "style": "formal"
    }
    ```
  - Response:
    ```json
    {
      "translation": "Translated text"
    }
    ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Zhansultan - zhansultan18@gmail.com

GitHub Profile: [https://github.com/zhansultan](https://github.com/zhans1)
LinkedIn: [https://linkedin.com/in/zhansultan](https://www.linkedin.com/in/zhansultan-rakhatov-08a088150/)

## 🙏 Acknowledgments

- [Qwen-Max API](https://www.alibabacloud.com/product/machine-learning) for translation services
- [Tailwind CSS](https://tailwindcss.com) for styling
- [React](https://reactjs.org) for the frontend framework
- [Node.js](https://nodejs.org) for the backend runtime
