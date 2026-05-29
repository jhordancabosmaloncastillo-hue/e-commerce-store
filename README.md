# Lo Real Store - Tienda Online de Electrónica y Productos de Primera Necesidad

## Descripción del Proyecto

**Lo Real Store** es una aplicación web de e-commerce desarrollada con **React** para la venta de productos electrónicos y de primera necesidad. Este es un proyecto universitario que demuestra el dominio de tecnologías modernas de desarrollo web.

## Características Principales

✅ **Catálogo de Productos** - 25+ productos con detalles  
✅ **Carrito de Compras Funcional** - Agregar, eliminar, actualizar cantidades  
✅ **Sistema de Categorías** - Filtrado por electrónica y primera necesidad  
✅ **Búsqueda y Filtros** - Encuentra productos rápidamente  
✅ **Página de Checkout** - Proceso de compra completo  
✅ **Formulario de Contacto** - Envío de mensajes  
✅ **Blog de Noticias** - Actualizaciones y artículos  
✅ **Diseño Responsive** - Compatible con mobile, tablet y desktop  
✅ **Interfaz Moderna** - UI/UX profesional  

## Tecnologías Utilizadas

- **Frontend:** React 18, React Router
- **Styling:** CSS3 (Flexbox, Grid)
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Estado Local:** React Hooks (useState, useContext)

## Instalación y Configuración

### Requisitos Previos
- Node.js (v18 o superior)
- npm o yarn

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/jhordancabosmaloncastillo-hue/e-commerce-store.git

# 2. Acceder al directorio
cd e-commerce-store

# 3. Instalar dependencias
npm install

# 4. Ejecutar en modo desarrollo
npm run dev

# 5. Abrir en el navegador
# La aplicación estará disponible en http://localhost:5173
```

## Estructura del Proyecto

```
e-commerce-store/
├── public/
│   └── images/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── ProductCard.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── CartPage.jsx
│   │   ├── Contact.jsx
│   │   ├── Blog.jsx
│   │   └── JokeGenerator.jsx
│   ├── context/
│   │   └── CartContext.jsx
│   ├── data/
│   │   ├── products.json
│   │   ├── blogPosts.json
│   │   └── categories.json
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## Funcionalidades Detalladas

### 1. Catálogo de Productos
- Visualización de 25+ productos
- Detalles: nombre, precio, descripción, imagen, categoría, stock
- Filtrado por categoría
- Búsqueda por nombre
- Ordenación por precio

### 2. Carrito de Compras
- Agregar productos al carrito
- Modificar cantidades
- Eliminar productos
- Cálculo automático de total
- Persistencia en localStorage

### 3. Sistema de Checkout
- Formulario de dirección de envío
- Método de pago
- Resumen de pedido
- Confirmación de compra

### 4. Formulario de Contacto
- Validación de formulario
- Envío de mensajes de contacto
- Confirmación de envío
- Preguntas Frecuentes

### 5. Blog de Noticias
- Publicaciones con fecha y autor
- Categorías de artículos
- Vista detallada

### 6. Generador de Chistes (Joke Generator)
- API externa: Official Joke API
- 3 categorías: General, Programación, Knock-knock
- Copia al portapapeles
- Interfaz interactiva

## Despliegue

### Opción 1: Vercel (Recomendado)
```bash
npm install -g vercel
vercel
```

### Opción 2: Netlify
- Conecta tu repositorio a Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### Opción 3: GitHub Pages
```bash
npm run build
# Los archivos estáticos estarán en dist/
```

## Contribuidores

- **Jhordán Cabos Malón Castillo** - Desarrollador Principal

## Licencia

Este proyecto es de código abierto bajo la licencia MIT.

## Contacto

📧 Email: jhordancabosmaloncastillo@example.com  
💼 GitHub: [@jhordancabosmaloncastillo-hue](https://github.com/jhordancabosmaloncastillo-hue)

---

**Nota:** Este es un proyecto educativo desarrollado para un proyecto final universitario.
