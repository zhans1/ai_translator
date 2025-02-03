import './config.js';  // Импортируем первым
import express from 'express';
import cors from 'cors';
import { translateRouter } from './controllers/translate.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/translate', translateRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 