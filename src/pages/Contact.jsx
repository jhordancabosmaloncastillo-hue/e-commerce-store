import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Por favor completa todos los campos');
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Contacto</h1>
        <p>¿Tienes alguna pregunta? Nos encantaría escucharte</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Información de Contacto</h2>
          
          <div className="info-item">
            <span className="info-icon">📍</span>
            <div>
              <h3>Dirección</h3>
              <p>Calle Principal 123<br />Ciudad, País 12345</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">📞</span>
            <div>
              <h3>Teléfono</h3>
              <p>+34 912 345 678<br />Lunes a Viernes: 9:00 - 18:00</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">✉️</span>
            <div>
              <h3>Email</h3>
              <p>info@lorealstore.com<br />soporte@lorealstore.com</p>
            </div>
          </div>

          <div className="info-item">
            <span className="info-icon">🕐</span>
            <div>
              <h3>Horario de Atención</h3>
              <p>Lunes a Viernes: 9:00 - 18:00<br />Sábado: 10:00 - 14:00<br />Domingo: Cerrado</p>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Envíanos un Mensaje</h2>
          
          {submitted && (
            <div className="success-message">
              ✓ ¡Mensaje enviado correctamente! Nos pondremos en contacto pronto.
            </div>
          )}

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre completo"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Asunto *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Cuéntanos tu consulta..."
                rows="6"
                required
              />
            </div>

            <button type="submit" className="btn-submit">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>

      <div className="faq-section">
        <h2>Preguntas Frecuentes</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h3>¿Cuál es el tiempo de entrega?</h3>
            <p>Entregamos en 24-48 horas hábiles en la mayoría de casos.</p>
          </div>
          <div className="faq-item">
            <h3>¿Puedo devolver un producto?</h3>
            <p>Sí, tienes 30 días desde la compra para devolver productos.</p>
          </div>
          <div className="faq-item">
            <h3>¿Qué métodos de pago aceptan?</h3>
            <p>Aceptamos tarjetas de crédito, débito y transferencias bancarias.</p>
          </div>
          <div className="faq-item">
            <h3>¿Hay descuentos por cantidad?</h3>
            <p>Sí, consulta nuestras promociones especiales para compras al por mayor.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
