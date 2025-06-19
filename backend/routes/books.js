const express = require('express');
const fs = require('fs');
const router = express.Router();
const filePath = './books.json';

const readBooks = () => JSON.parse(fs.readFileSync(filePath));

// GET all books
router.get('/', (req, res) => {
  res.json(readBooks());
});

// ADD a new book
router.post('/', (req, res) => {
  const books = readBooks();
  const newBook = { id: Date.now(), ...req.body };
  books.push(newBook);
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  res.status(201).json(newBook);
});

// DELETE a book
router.delete('/:id', (req, res) => {
  let books = readBooks();
  books = books.filter(book => book.id != req.params.id);
  fs.writeFileSync(filePath, JSON.stringify(books, null, 2));
  res.json({ message: "Book deleted" });
});

module.exports = router;

