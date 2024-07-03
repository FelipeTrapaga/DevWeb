import React, { useState, useContext } from 'react';
import { BookContext } from '../BookContext';

const SearchBookForm = () => {
  const { books } = useContext(BookContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    const results = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div>
      <h2>Pesquisar Livro</h2>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Pesquisar por título"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Pesquisar</button>
      </form>

      <ul>
        {searchResults.map(book => (
          <li key={book.isbn}>
            {book.title} - {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBookForm;
