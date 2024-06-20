import express from 'express';
import userController from '../controllers/userController.js';
import authMiddleware from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/', authMiddleware(['superadmin']), userController.getAllUsers);
router.get('/:id', authMiddleware(['user', 'admin', 'superadmin']), userController.getUserById);
router.post('/', authMiddleware(['superadmin']), userController.createUser);
router.put('/:id', authMiddleware(['user', 'admin', 'superadmin']), userController.updateUser);
router.delete('/:id', authMiddleware(['superadmin']), userController.deleteUser);

export default router;
