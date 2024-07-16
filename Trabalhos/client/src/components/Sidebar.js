import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthContext';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);

  const handleMouseEnter = () => {
    setIsExpanded(true);
  };

  const handleMouseLeave = () => {
    setIsExpanded(false);
  };

  return (
    <div 
      className={`sidebar ${isExpanded ? 'expanded' : 'collapsed'}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2>Menu</h2>
      <ul>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/search-book">Pesquisar Livro</Link></li>
        {isAuthenticated && <li><Link to="/add-book">Adicionar Livro</Link></li>}
        {isAuthenticated && <li><Link to="/remove-book">Remover Livro</Link></li>}
        {isAuthenticated ? (
          <li><button onClick={logout}>Logout</button></li>
        ) : (
          <li><Link to="/login">Login</Link></li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
