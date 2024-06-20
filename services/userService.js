import User from '../models/user.js';

const getAllUsers = async () => {
  return await User.findAll();
};

const getUserById = async (id) => {
  return await User.findById(id);
};

const createUser = async (user) => {
  return await User.create(user);
};

const updateUser = async (id, user) => {
  return await User.update(id, user);
};

const deleteUser = async (id) => {
  return await User.delete(id);
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
