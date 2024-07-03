import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddBookForm from './components/AddBookForm';
import SearchBookForm from './components/SearchBookForm';
import RemoveBookForm from './components/RemoveBookForm';

import { BookProvider } from './BookContext'; // Importe o BookProvider

import './App.css';
import logo from '../src/imagens/logo.png'
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
      <div className="header">
          <img src={logo} alt="Logo da sua aplicação" />
        </div>
        <Sidebar />
        <div className="content">
          <div className="content-wrapper">
            <BookProvider> {/* Wrap everything inside BookProvider */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/add-book" element={<AddBookForm />} />
                <Route path="/remove-book" element={<RemoveBookForm />} />
                <Route path="/search-book" element={<SearchBookForm />} />
              </Routes>

              
            </BookProvider>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
