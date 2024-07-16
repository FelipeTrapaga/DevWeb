import React, { createContext, useState } from 'react';

// Crie o contexto
export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([{ id: 1, title: "1984", author: "George Orwell", year: 1949 },
    { id: 2, title: "O Senhor dos Anéis", author: "J.R.R. Tolkien", year: 1954 },
    { id: 3, title: "Cem Anos de Solidão", author: "Gabriel Garcia Marquez", year: 1967 },
    { id: 4, title: "Dom Quixote", author: "Miguel de Cervantes", year: 1605 },
    { id: 5, title: "O Apanhador no Campo de Centeio", author: "J.D. Salinger", year: 1951 },
    { id: 6, title: "Orgulho e Preconceito", author: "Jane Austen", year: 1813 },
    { id: 7, title: "Moby Dick", author: "Herman Melville", year: 1851 },
    { id: 8, title: "Guerra e Paz", author: "Leo Tolstoy", year: 1869 },
    { id: 9, title: "O Grande Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
    { id: 10, title: "Jane Eyre", author: "Charlotte Brontë", year: 1847 },
    { id: 11, title: "Crime e Castigo", author: "Fyodor Dostoevsky", year: 1866 },
    { id: 12, title: "O Retrato de Dorian Gray", author: "Oscar Wilde", year: 1890 },
    { id: 13, title: "Os Irmãos Karamazov", author: "Fyodor Dostoevsky", year: 1880 },
    { id: 14, title: "Ulisses", author: "James Joyce", year: 1922 },
    { id: 15, title: "As Vinhas da Ira", author: "John Steinbeck", year: 1939 },
    { id: 16, title: "A Revolução dos Bichos", author: "George Orwell", year: 1945 },
    { id: 17, title: "A Metamorfose", author: "Franz Kafka", year: 1915 },
    { id: 18, title: "O Sol é Para Todos", author: "Harper Lee", year: 1960 },
    { id: 19, title: "O Estrangeiro", author: "Albert Camus", year: 1942 },
    { id: 20, title: "Coração das Trevas", author: "Joseph Conrad", year: 1899 }
    // Adicione mais livros aqui
  ]);

  const addBook = (title, author, year) => {
    const newId = books.length ? books[books.length - 1].id + 1 : 1;
    setBooks([...books, { id: newId, title, author, year }]);
  };

  const removeBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const searchBooks = (query) => {
    return books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
  };

  const paginateBooks = (page, pageSize) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return books.slice(startIndex, endIndex);
  };

  return (
    <BookContext.Provider value={{ books, addBook, removeBook, searchBooks, paginateBooks }}>
      {children}
    </BookContext.Provider>
  );
};
