import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const BookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({ title: '', author: '', ISBN: '' });

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:3000/api/books/${id}`)
        .then((response) => setBook(response.data))
        .catch((error) => console.error(error));
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      axios.put(`http://localhost:3000/api/books/${id}`, book)
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    } else {
      axios.post('http://localhost:3000/api/books', book)
        .then(() => navigate('/'))
        .catch((error) => console.error(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>{id ? 'Edit Book' : 'Add Book'}</h1>
      <div className="mb-3">
        <label>Title</label>
        <input
          type="text"
          className="form-control"
          value={book.title}
          onChange={(e) => setBook({ ...book, title: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>Author</label>
        <input
          type="text"
          className="form-control"
          value={book.author}
          onChange={(e) => setBook({ ...book, author: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label>ISBN</label>
        <input
          type="text"
          className="form-control"
          value={book.ISBN}
          onChange={(e) => setBook({ ...book, ISBN: e.target.value })}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

export default BookForm;