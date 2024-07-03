import React, { useState } from 'react';
import API_URL from '../config';

const SearchBookForm = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/books/search?q=${query}`);

      if (response.ok) {
        const data = await response.json();
        setResults(data);
      } else {
        alert('Erro ao pesquisar livros.');
      }
    } catch (error) {
      alert('Erro ao pesquisar livros.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Pesquisar Livro</h2>
        <input
          type="text"
          placeholder="Pesquisar"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          required
        />
        <button type="submit">Pesquisar</button>
      </form>
      <ul>
        {results.map((book) => (
          <li key={book.id}>{book.title} - {book.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBookForm;
