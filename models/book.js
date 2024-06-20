import db from '../config/db.js';

const Book = {
  findAll: () => db('books').select('*'),
  findById: (id) => db('books').where({ id }).first(),
  create: (book) => db('books').insert(book).returning('*'),
  update: (id, book) => db('books').where({ id }).update(book).returning('*'),
  delete: (id) => db('books').where({ id }).del(),
};

export default Book;
