import React, { useState, useContext, useEffect } from 'react';
import { BookContext } from '../BookContext';

const SearchBookForm = () => {
  const { books, searchBooks, paginateBooks } = useContext(BookContext);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10; // Número de livros por página

  useEffect(() => {
    // Inicializar com todos os livros paginados
    setResults(paginateBooks(currentPage, pageSize));
  }, [books, currentPage]);

  const handleSearch = (e) => {
    e.preventDefault();
    setResults(searchBooks(query));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(books.length / pageSize);

  return (
    <div>
      <h1>Pesquisar Livro</h1>
      <form onSubmit={handleSearch}>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Procurar por título ou autor"/>
        <button type="submit">Procurar Livro</button>
      </form>
      <ul>
        {results.map((book) => (
          <li key={book.id}>
            {book.title} by {book.author} ({book.year})
          </li>
        ))}
      </ul>
      <div>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SearchBookForm;
