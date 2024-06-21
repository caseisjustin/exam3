import userService from '../services/userService.js';
import User from '../models/user.js';
import bcrypt from "bcrypt"
import { v4 as uuidv4 } from "uuid"

const getAllUsers = async (req, res, next) => {
  try {
    const users = await userService.getAllUsers();
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    const user = await userService.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const { email, username, password, role, first_name, last_name, phone_number, address } = req.body;

    const existingUser = await User.findByEmail(email);
    if (existingUser) {
      throw new Error('User with this email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUserCreate = {
      id: uuidv4(),
      email,
      username,
      password: hashedPassword,
      role,
      first_name,
      last_name,
      phone_number,
      address,
      status: 'active',
      created_at: new Date(),
      updated_at: new Date(),
    };
    const newUser = await userService.createUser(newUserCreate);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await userService.updateUser(req.params.id, req.body);
    res.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    await userService.deleteUser(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
