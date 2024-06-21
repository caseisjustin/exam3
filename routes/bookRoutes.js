import express from 'express';
import bookController from '../controllers/bookController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { bookSchema } from '../validators/bookValidator.js';
import validate from '../middlewares/validate.js';

const router = express.Router();

router.get('/', bookController.getAllBooks);
router.get('/:id', bookController.getBookById);
router.post('/', authMiddleware(['admin', 'superadmin']), validate(bookSchema), bookController.createBook);
router.put('/:id', authMiddleware(['admin', 'superadmin']), bookController.updateBook);
router.delete('/:id', authMiddleware(['admin', 'superadmin']), bookController.deleteBook);

export default router;
