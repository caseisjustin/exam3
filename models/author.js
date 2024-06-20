import db from '../config/db.js';

const Author = {
  findAll: () => db('authors').select('*'),
  findById: (id) => db('authors').where({ id }).first(),
  create: (author) => db('authors').insert(author).returning('*'),
  update: (id, author) => db('authors').where({ id }).update(author).returning('*'),
  delete: (id) => db('authors').where({ id }).del(),
};

export default Author;
