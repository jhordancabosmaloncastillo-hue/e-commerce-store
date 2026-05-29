import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import CartPage from './pages/CartPage';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </main>
        <footer className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h4>Sobre Lo Real Store</h4>
              <p>Tu tienda online confiable para electrónica y productos de primera necesidad.</p>
            </div>
            <div className="footer-section">
              <h4>Enlaces Útiles</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/products">Productos</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contacto</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Síguenos</h4>
              <div className="social-links">
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
                <a href="#">Twitter</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Lo Real Store. Todos los derechos reservados. | Proyecto Universitario</p>
          </div>
        </footer>
      </Router>
    </CartProvider>
  );
}

export default App;
