import Genre from '../models/genre.js';

const getAllGenres = async () => {
  return await Genre.findAll();
};

const getGenreById = async (id) => {
  return await Genre.findById(id);
};

const createGenre = async (genre) => {
  return await Genre.create(genre);
};

const updateGenre = async (id, genre) => {
  return await Genre.update(id, genre);
};

const deleteGenre = async (id) => {
  return await Genre.delete(id);
};

export default {
  getAllGenres,
  getGenreById,
  createGenre,
  updateGenre,
  deleteGenre,
};
