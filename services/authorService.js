import Author from '../models/author.js';

const getAllAuthors = async () => {
  return await Author.findAll();
};

const getAuthorById = async (id) => {
  return await Author.findById(id);
};

const createAuthor = async (author) => {
  return await Author.create(author);
};

const updateAuthor = async (id, author) => {
  return await Author.update(id, author);
};

const deleteAuthor = async (id) => {
  return await Author.delete(id);
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
