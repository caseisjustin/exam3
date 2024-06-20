import Book from '../models/book.js';

const getAllBooks = async () => {
  return await Book.findAll();
};

const getBookById = async (id) => {
  return await Book.findById(id);
};

const createBook = async (book) => {
  return await Book.create(book);
};

const updateBook = async (id, book) => {
  return await Book.update(id, book);
};

const deleteBook = async (id) => {
  return await Book.delete(id);
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
