import { useEffect, useState } from 'react';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://34.216.197.13:3000/books')  // backend URL
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error("API error", err));
  }, []);

  return (
    <div>
      <h1>📚 Bookstore</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title} — {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

