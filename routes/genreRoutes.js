import express from 'express';
import genreController from '../controllers/genreController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { genreSchema } from '../validators/genreValidator.js';
import validate from '../middlewares/validate.js';

const router = express.Router();

router.get('/', genreController.getAllGenres);
router.get('/:id', genreController.getGenreById);
router.post('/', authMiddleware(['admin', 'superadmin']), validate(genreSchema), genreController.createGenre);
router.put('/:id', authMiddleware(['admin', 'superadmin']), genreController.updateGenre);
router.delete('/:id', authMiddleware(['admin', 'superadmin']), genreController.deleteGenre);

export default router;
