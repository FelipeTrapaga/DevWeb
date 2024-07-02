import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
        <li><Link to="/add-book">Adicionar Livro</Link></li>
        <li><Link to="/remove-book">Remover Livro</Link></li>
        <li><Link to="/search-book">Pesquisar Livro</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
