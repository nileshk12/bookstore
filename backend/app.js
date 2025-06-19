const express = require('express');
const cors = require('cors');
const booksRouter = require('./routes/books');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/books', booksRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Bookstore app running on port ${PORT}`);
});

