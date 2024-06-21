import express from 'express';
import authorController from '../controllers/authorController.js';
import authMiddleware from '../middlewares/authMiddleware.js';
import { userSignupSchema } from '../validators/userValidator.js';
import validate from '../middlewares/validate.js';

const router = express.Router();

router.get('/', authMiddleware(['admin', 'superadmin']), authorController.getAllAuthors);
router.get('/:id', authMiddleware(['admin', 'superadmin']), authorController.getAuthorById);
router.post('/', authMiddleware(['admin', 'superadmin']), validate(userSignupSchema), authorController.createAuthor);
router.put('/:id', authMiddleware(['admin', 'superadmin']), authorController.updateAuthor);
router.delete('/:id', authMiddleware(['admin', 'superadmin']), authorController.deleteAuthor);

export default router;
