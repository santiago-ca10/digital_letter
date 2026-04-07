# 💌 Interactive Envelope & Message System

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://TU_USUARIO.github.io/TU_REPO/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Un componente web interactivo y elegante que simula un sobre físico con animaciones fluidas en 3D. Desarrollado con un enfoque en **UI/UX limpia**, este proyecto demuestra el manejo de estados en el DOM, animaciones SVG complejas y diseño responsivo.

## 🚀 Vista Previa
El proyecto presenta un sobre minimalista sellado con una estrella. Al interactuar con él, se despliega una carta personalizada con una transición suave de capas (`z-index`) y una llamada a la acción dinámica.

## ✨ Características Principales
* **Geometría SVG Precisa:** Formas vectoriales optimizadas para una nitidez perfecta en cualquier resolución.
* **Animaciones CSS3:** Uso intensivo de `transform-origin`, `rotateX` y `transition` para simular profundidad física.
* **Interacción Inteligente:** Lógica de JavaScript para prevenir el cierre accidental durante la interacción con la carta.
* **Diseño Sólido:** Esquema de colores vibrante con tipografía optimizada (Google Fonts).

## 🛠️ Stack Tecnológico
* **HTML5:** Estructura semántica y contenedores SVG.
* **CSS3:** Flexbox, animaciones clave (`keyframes`) y gestión de profundidad.
* **Vanilla JavaScript:** Manejo de eventos y lógica de redirección asíncrona.

## 📂 Arquitectura del Proyecto
```text
├── assets/
│   ├── css/
│   │   └── style.css   # Estilos globales y animaciones de cámara
│   └── js/
│       └── script.js  # Lógica de interacción y redirección
├── index.html         # Punto de entrada y estructura SVG
└── README.md          # Documentación técnica