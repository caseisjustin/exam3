import bookService from '../services/bookService.js';

const getAllBooks = async (req, res, next) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

const getBookById = async (req, res, next) => {
  try {
    const book = await bookService.getBookById(req.params.id);
    res.json(book);
  } catch (error) {
    next(error);
  }
};

const createBook = async (req, res, next) => {
  try {
    const newBook = await bookService.createBook(req.body);
    res.status(201).json(newBook);
  } catch (error) {
    next(error);
  }
};

const updateBook = async (req, res, next) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
    res.json(updatedBook);
  } catch (error) {
    next(error);
  }
};

const deleteBook = async (req, res, next) => {
  try {
    await bookService.deleteBook(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
