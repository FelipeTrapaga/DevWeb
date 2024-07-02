import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import AddBookForm from './components/AddBookForm';
import RemoveBookForm from './components/RemoveBookForm';
import SearchBookForm from './components/SearchBookForm';

import './App.css';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/add-book" element={<AddBookForm />} />
              <Route path="/remove-book" element={<RemoveBookForm />} />
              <Route path="/search-book" element={<SearchBookForm />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
