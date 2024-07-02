import React, { useState, useEffect } from 'react';

const SearchBookForm = () => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch(`/api/books`);
        if (!response.ok) {
          throw new Error('Erro ao buscar livros');
        }
        const data = await response.json();
        setBooks(data);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const filteredBooks = books.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.isbn.toLowerCase().includes(searchTerm.toLowerCase())
    );
    console.log(filteredBooks);
  };

  return (
    <div className="form-container">
      <h2>Pesquisar Livro</h2>
      <form onSubmit={handleSearch}>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} placeholder="Buscar por título, autor ou ISBN" />
        <button type="submit">Pesquisar</button>
      </form>
    </div>
  );
};

export default SearchBookForm;
