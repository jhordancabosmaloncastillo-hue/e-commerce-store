import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Lo Real Store</h1>
          <p>Tu tienda online de confianza para electrónica y productos de primera necesidad</p>
          <Link to="/products" className="btn-primary">
            Ver Catálogo
          </Link>
        </div>
        <div className="hero-image">
          <div className="hero-icon">🛍️</div>
        </div>
      </section>

      <section className="features">
        <h2>¿Por qué elegir Lo Real Store?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <span className="feature-icon">✓</span>
            <h3>Productos de Calidad</h3>
            <p>Seleccionamos los mejores productos para ti</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🚚</span>
            <h3>Envío Rápido</h3>
            <p>Entrega en tu domicilio en 24-48 horas</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">💳</span>
            <h3>Pago Seguro</h3>
            <p>Múltiples opciones de pago seguras</p>
          </div>
          <div className="feature-card">
            <span className="feature-icon">🔒</span>
            <h3>Garantía</h3>
            <p>100% satisfecho o dinero de vuelta</p>
          </div>
        </div>
      </section>

      <section className="categories">
        <h2>Nuestras Categorías</h2>
        <div className="categories-grid">
          <Link to="/products?category=Electrónica" className="category-card">
            <div className="category-icon">📱</div>
            <h3>Electrónica</h3>
            <p>Dispositivos tecnológicos de última generación</p>
          </Link>
          <Link to="/products?category=Primera Necesidad" className="category-card">
            <div className="category-icon">🛒</div>
            <h3>Primera Necesidad</h3>
            <p>Productos esenciales para el hogar</p>
          </Link>
        </div>
      </section>

      <section className="cta">
        <h2>¿Listo para comprar?</h2>
        <p>Explora nuestro amplio catálogo de productos</p>
        <Link to="/products" className="btn-primary">
          Ir a Productos
        </Link>
      </section>
    </div>
  );
};

export default Home;
