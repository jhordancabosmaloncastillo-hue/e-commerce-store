import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Header.css';

const Header = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>🏪 Lo Real Store</h1>
        </Link>
        <nav className="nav">
          <Link to="/">Inicio</Link>
          <Link to="/products">Productos</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/contact">Contacto</Link>
          <Link to="/cart" className="cart-link">
            🛒 Carrito <span className="badge">{getTotalItems()}</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
