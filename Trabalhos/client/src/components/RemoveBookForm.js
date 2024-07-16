import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

const RemoveBookForm = () => {
  const { books, removeBook } = useContext(BookContext);
  const [bookId, setBookId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    removeBook(parseInt(bookId, 10));
    setBookId('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Remover Livro</h1>
      <select value={bookId} onChange={(e) => setBookId(e.target.value)}>
        <option value="">Escolha um livro para remover</option>
        {books.map((book) => (
          <option key={book.id} value={book.id}>
            {book.title} por {book.author} ({book.year})
          </option>
        ))}
      </select>
      <button type="submit">Remover Livro</button>
    </form>
  );
};

export default RemoveBookForm;
