import db from '../config/db.js';

const Genre = {
  findAll: () => db('genres').select('*'),
  findById: (id) => db('genres').where({ id }).first(),
  create: (genre) => db('genres').insert(genre).returning('*'),
  update: (id, genre) => db('genres').where({ id }).update(genre).returning('*'),
  delete: (id) => db('genres').where({ id }).del(),
};

export default Genre;
