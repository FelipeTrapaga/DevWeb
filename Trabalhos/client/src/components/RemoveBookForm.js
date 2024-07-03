import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

const RemoveBookForm = () => {
  const { books, removeBook } = useContext(BookContext);
  const [title, setTitle] = useState('');
  const [removed, setRemoved] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookToRemove = books.find(book => book.title.toLowerCase() === title.toLowerCase());
    
    if (bookToRemove) {
      removeBook(bookToRemove);
      setRemoved(true);
      setTitle('');
    } else {
      setRemoved(false);
      alert('Livro não encontrado.');
    }
  };

  return (
    <div>
      <h2>Remover Livro</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título do livro a ser removido"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <button type="submit">Remover</button>
      </form>
      {removed && <p>Livro removido com sucesso!</p>}
    </div>
  );
};

export default RemoveBookForm;
