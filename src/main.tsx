import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa el componente principal
// @ts-ignore
import './styles/App.css'; // Importa los estilos globales

/**
 * PUNTO DE ENTRADA (Main)
 * Qué: Inicializa la aplicación React.
 * Cómo: Busca el elemento 'root' en el index.html y renderiza <App />.
 * Nota: Se usa StrictMode para detectar prácticas no recomendadas durante el desarrollo.
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);