import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/books')
      .then((response) => setBooks(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Library Books</h1>
      <Link to="/add" className="btn btn-primary mb-3">Add Book</Link>
      <ul className="list-group">
        {books.map((book) => (
          <li key={book._id} className="list-group-item">
            {book.title} by {book.author} (ISBN: {book.ISBN})
            <Link to={`/edit/${book._id}`} className="btn btn-warning btn-sm ms-2">Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;