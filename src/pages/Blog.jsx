import React, { useState } from 'react';
import blogPosts from '../data/blogPosts.json';
import './Blog.css';

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="blog-page">
      <div className="blog-header">
        <h1>Blog de Lo Real Store</h1>
        <p>Consejos, noticias y artículos de interés</p>
      </div>

      {selectedPost ? (
        <div className="blog-post-detail">
          <button className="btn-back" onClick={() => setSelectedPost(null)}>
            ← Volver al Blog
          </button>

          <article className="post-article">
            <img src={selectedPost.image} alt={selectedPost.title} className="post-image" />
            
            <div className="post-header">
              <span className="post-category">{selectedPost.category}</span>
              <h1>{selectedPost.title}</h1>
              <div className="post-meta">
                <span>Por {selectedPost.author}</span>
                <span>•</span>
                <span>{new Date(selectedPost.date).toLocaleDateString('es-ES')}</span>
              </div>
            </div>

            <div className="post-content">
              <p>{selectedPost.content}</p>
              
              <div className="post-highlight">
                <p>💡 <strong>Tip importante:</strong> Recuerda que la calidad de los productos que compres 
                depende en gran medida de elegir vendedores confiables como Lo Real Store.</p>
              </div>

              <h2>¿Te gustó este artículo?</h2>
              <p>Mantente atento a nuestro blog para más contenido interesante. Puedes suscribirte 
              a nuestro newsletter para recibir notificaciones de nuevos artículos.</p>
            </div>
          </article>
        </div>
      ) : (
        <div className="blog-posts-grid">
          {blogPosts.map(post => (
            <div key={post.id} className="blog-card">
              <img src={post.image} alt={post.title} className="blog-image" />
              <span className="blog-category">{post.category}</span>
              <h3>{post.title}</h3>
              <p className="blog-excerpt">{post.excerpt}</p>
              <div className="blog-footer">
                <div className="blog-meta">
                  <span className="author">Por {post.author}</span>
                  <span className="date">{new Date(post.date).toLocaleDateString('es-ES')}</span>
                </div>
                <button 
                  className="btn-read-more"
                  onClick={() => setSelectedPost(post)}
                >
                  Leer Más →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
