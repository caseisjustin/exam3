import genreService from '../services/genreService.js';

const getAllGenres = async (req, res, next) => {
  try {
    const genres = await genreService.getAllGenres();
    res.json(genres);
  } catch (error) {
    next(error);
  }
};

const getGenreById = async (req, res, next) => {
  try {
    const genre = await genreService.getGenreById(req.params.id);
    res.json(genre);
  } catch (error) {
    next(error);
  }
};

const createGenre = async (req, res, next) => {
  try {
    const newGenre = await genreService.createGenre(req.body);
    res.status(201).json(newGenre);
  } catch (error) {
    next(error);
  }
};

const updateGenre = async (req, res, next) => {
  try {
    const updatedGenre = await genreService.updateGenre(req.params.id, req.body);
    res.json(updatedGenre);
  } catch (error) {
    next(error);
  }
};

const deleteGenre = async (req, res, next) => {
  try {
    await genreService.deleteGenre(req.params.id);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};

export default {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
};
