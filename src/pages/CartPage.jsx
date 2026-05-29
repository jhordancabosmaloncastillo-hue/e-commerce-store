import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'card'
  });

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, parseInt(quantity));
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.address) {
      alert('Por favor completa todos los campos requeridos');
      return;
    }
    alert('¡Gracias por tu compra! Tu pedido ha sido procesado.');
    clearCart();
    setShowCheckout(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      postalCode: '',
      paymentMethod: 'card'
    });
  };

  if (cart.length === 0 && !showCheckout) {
    return (
      <div className="cart-page empty-cart">
        <h1>Tu Carrito</h1>
        <div className="empty-message">
          <p>😢 Tu carrito está vacío</p>
          <Link to="/products" className="btn-primary">
            Continuar Comprando
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Tu Carrito</h1>

      {!showCheckout ? (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Cantidad</th>
                <th>Subtotal</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td>
                    <div className="product-info-table">
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>${item.price}</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                      className="quantity-input"
                    />
                  </td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button
                      className="btn-remove"
                      onClick={() => removeFromCart(item.id)}
                    >
                      🗑️ Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <div className="summary-info">
              <p>Total de artículos: <strong>{cart.length}</strong></p>
              <h2>Total: <span className="total-price">${getTotalPrice().toFixed(2)}</span></h2>
            </div>
            <div className="cart-actions">
              <Link to="/products" className="btn-secondary">
                Continuar Comprando
              </Link>
              <button
                className="btn-primary"
                onClick={() => setShowCheckout(true)}
              >
                Proceder al Pago
              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="checkout-container">
          <form className="checkout-form" onSubmit={handleCheckout}>
            <h2>Información de Envío</h2>

            <div className="form-group">
              <label>Nombre Completo *</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleFormChange}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Teléfono</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Dirección *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleFormChange}
                placeholder="Calle y número"
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Ciudad *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Código Postal</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className="form-group">
              <label>Método de Pago *</label>
              <select
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleFormChange}
              >
                <option value="card">Tarjeta de Crédito</option>
                <option value="debit">Tarjeta de Débito</option>
                <option value="transfer">Transferencia Bancaria</option>
              </select>
            </div>

            <div className="checkout-summary">
              <h3>Resumen del Pedido</h3>
              {cart.map(item => (
                <div key={item.id} className="summary-item">
                  <span>{item.name} x {item.quantity}</span>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <div className="summary-total">
                <span>Total:</span>
                <span>${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>

            <div className="form-actions">
              <button
                type="button"
                className="btn-secondary"
                onClick={() => setShowCheckout(false)}
              >
                Volver al Carrito
              </button>
              <button type="submit" className="btn-primary">
                Completar Compra
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default CartPage;
