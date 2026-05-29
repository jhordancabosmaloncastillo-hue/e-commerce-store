import React, { useState, useMemo } from 'react';
import ProductCard from '../components/ProductCard';
import products from '../data/products.json';
import './Products.css';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortBy, setSortBy] = useState('name');

  const categories = [...new Set(products.map(p => p.category))];

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = !selectedCategory || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    result.sort((a, b) => {
      switch(sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

    return result;
  }, [searchTerm, selectedCategory, sortBy]);

  return (
    <div className="products-page">
      <h1>Nuestros Productos</h1>
      
      <div className="filters-container">
        <div className="filter-group">
          <input
            type="text"
            placeholder="🔍 Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="filter-group">
          <label>Categoría:</label>
          <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Todas</option>
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        <div className="filter-group">
          <label>Ordenar por:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Nombre (A-Z)</option>
            <option value="price-low">Precio: Menor a Mayor</option>
            <option value="price-high">Precio: Mayor a Menor</option>
          </select>
        </div>

        <button className="btn-reset" onClick={() => {
          setSearchTerm('');
          setSelectedCategory('');
          setSortBy('name');
        }}>
          Limpiar Filtros
        </button>
      </div>

      {filteredAndSortedProducts.length === 0 ? (
        <div className="no-products">
          <p>😔 No se encontraron productos</p>
          <button className="btn-reset" onClick={() => {
            setSearchTerm('');
            setSelectedCategory('');
          }}>
            Ver todos los productos
          </button>
        </div>
      ) : (
        <>
          <p className="results-info">
            Mostrando {filteredAndSortedProducts.length} de {products.length} productos
          </p>
          <div className="products-grid">
            {filteredAndSortedProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;
