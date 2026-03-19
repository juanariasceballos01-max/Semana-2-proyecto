# 🚚 MudaTech - Sistema de Gestión de Traslados

**MudaTech** es una aplicación web moderna desarrollada con **React**, **Vite** y **TypeScript**. Está diseñada para digitalizar la logística de empresas de mudanzas, permitiendo el control total sobre las solicitudes de servicio, vehículos y estados de entrega.

---

## ✨ Características Principales

* **Panel de Estadísticas (Stats):** Visualización en tiempo real de servicios totales, pendientes, completados y recaudación total.
* **Gestión CRUD Completa:** Registro, edición, visualización y eliminación de solicitudes de traslado.
* **Buscador Inteligente:** Filtro dinámico por nombre de cliente o dirección de destino.
* **Interfaz Responsiva:** Diseño adaptativo para escritorio y dispositivos móviles mediante CSS Grid y Flexbox.
* **Tipado Robusto:** Uso estricto de TypeScript para garantizar la integridad de los datos logísticos.

---

## 🛠️ Tecnologías Utilizadas

* **React 18** - Biblioteca para la interfaz de usuario.
* **Vite** - Herramienta de construcción (Build tool) ultra rápida.
* **TypeScript** - Lenguaje para tipado estático y desarrollo seguro.
* **Lucide React** - Set de iconos vectoriales profesionales.
* **CSS3 (Custom Properties & Grid)** - Estilos personalizados sin frameworks externos.

---

## 🚀 Instalación y Uso

Sigue estos pasos para ejecutar el proyecto localmente:

1.  **Clonar el repositorio:**
    ```bash
    git clone [https://github.com/juanariasceballos01-max/Semana-1-proyecto.git](https://github.com/juanariasceballos01-max/Semana-1-proyecto.git)
    cd Proyecto-2
    ```

2.  **Instalar dependencias:**
    (Se recomienda usar `pnpm` para mayor velocidad, pero puedes usar `npm` o `yarn`).
    ```bash
    pnpm install
    ```

3.  **Iniciar el servidor de desarrollo:**
    ```bash
    pnpm dev
    ```

4.  **Abrir en el navegador:**
    Visita `http://localhost:5173` para ver la aplicación funcionando.

---

## 📂 Estructura del Proyecto

```text
src/
├── components/     # Componentes reutilizables (Header, Form, List, Card, Stats)
├── styles/         # Archivos de estilos CSS
├── types/          # Definición de Interfaces y Types de TypeScript
├── App.tsx         # Lógica principal y estado de la aplicación
└── main.tsx        # Punto de entrada de React
