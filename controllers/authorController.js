import authorService from '../services/authorService.js';

const getAllAuthors = async (req, res, next) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    next(error);
  }
};

const getAuthorById = async (req, res, next) => {
  try {
    const author = await authorService.getAuthorById(req.params.id);
    res.json(author);
  } catch (error) {
    next(error);
  }
};

const createAuthor = async (req, res, next) => {
  try {
    const newAuthor = await authorService.createAuthor(req.body);
    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};

const updateAuthor = async (req, res, next) => {
  try {
    const updatedAuthor = await authorService.updateAuthor(req.params.id, req.body);
    res.json(updatedAuthor);
  } catch (error) {
    next(error);
  }
};

const deleteAuthor = async (req, res, next) => {
  try {
    await authorService.deleteAuthor(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
