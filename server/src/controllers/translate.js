import express from 'express';
import { TranslationService } from '../services/translation.js';

const router = express.Router();
const translationService = new TranslationService();

router.post('/', async (req, res) => {
  try {
    const { text, sourceLang, targetLang, style } = req.body;
    const translation = await translationService.translate(text, sourceLang, targetLang, style);
    res.json({ translation });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export { router as translateRouter }; 