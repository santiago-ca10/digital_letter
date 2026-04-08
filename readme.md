# 💌 Carta Digital Interactiva

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Active-brightgreen)](https://santiago-ca10.github.io/digital_letter/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

Una experiencia web interactiva que simula una carta física con animaciones 3D. Diseñada para mensajes especiales como cumpleaños, felicitaciones o propuestas románticas.

## 🎯 ¿Qué hace?

Esta aplicación web presenta:
- **Un sobre animado** que se abre y cierra con clics
- **Una carta blanca** con mensaje personalizado
- **Un botón de regalo** que activa una sorpresa
- **Pantalla de videollamada falsa** con animaciones
- **Redirección automática** a Instagram Direct

## ✨ Características

### 🎨 Diseño y Animaciones
- **Sobre 3D animado** con geometría SVG precisa
- **Transiciones fluidas** usando CSS3 transforms
- **Animación de sacudida** en el botón de regalo
- **Efectos de profundidad** con z-index y perspective
- **Diseño responsivo** optimizado para móvil y desktop

### 🎮 Interactividad
- **Apertura/cerrado del sobre** con clics inteligentes
- **Prevención de cierres accidentales** durante la interacción
- **Animación de videollamada** con avatar pulsante
- **Redirección automática** a Instagram después de 3 segundos

### 📱 Responsive Design
- **Breakpoints optimizados** para diferentes tamaños de pantalla
- **Tipografía escalable** con clamp() para mejor legibilidad
- **Espaciado adaptativo** que mantiene proporciones

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura semántica y SVG
- **CSS3** - Animaciones, flexbox y diseño responsivo
- **Vanilla JavaScript** - Lógica de interacción y eventos
- **Google Fonts** - Tipografía "Itim" para estilo handwritten

## 📂 Estructura del Proyecto

```
digital_letter/
├── index.html              # Página principal con estructura HTML
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos y animaciones
│   └── js/
│       └── script.js       # Lógica JavaScript
└── README.md               # Esta documentación
```

## 🚀 Cómo Usar

### Opción 1: GitHub Pages (Recomendado)
1. El proyecto ya está desplegado en: https://santiago-ca10.github.io/digital_letter/
2. Simplemente comparte el enlace

### Opción 2: Ejecutar Localmente
1. Clona el repositorio:
   ```bash
   git clone https://github.com/santiago-ca10/digital_letter.git
   ```

2. Abre `index.html` en tu navegador web

### Opción 3: Servidor Local
```bash
# Con Python
python -m http.server 8000

# Con Node.js
npx serve .

# Luego abre http://localhost:8000
```

## ⚙️ Personalización

### Cambiar el Mensaje
Edita el texto en `index.html`:
```html
<span class="card-text">¡TU MENSAJE AQUÍ!</span>
```

### Cambiar Usuario de Instagram
Modifica en `assets/js/script.js`:
```javascript
const usuarioIG = "tu_usuario_instagram"; // Cambia esto
```

### Ajustar Colores
En `assets/css/style.css`, busca estas variables:
```css
background-color: #00bcd4; /* Fondo principal */
background-color: #fde047; /* Color del sobre */
background-color: #ef4444; /* Color del botón */
```

### Modificar Tamaños
Para cambiar el tamaño de la carta, ajusta:
```css
.card {
    height: 90%; /* Cambia este porcentaje */
}
```

## 📱 Compatibilidad

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+
- ✅ Móviles modernos (iOS Safari, Chrome Android)

## 🎨 Inspiración y Diseño

El diseño se inspira en cartas físicas tradicionales pero con un toque moderno:
- **Colores vibrantes** para llamar la atención
- **Animaciones sutiles** que no distraen del mensaje
- **Tipografía handwritten** para un toque personal
- **Interfaz minimalista** enfocada en la experiencia

## 🤝 Contribuir

Si quieres mejorar el proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 🙏 Créditos

- **Desarrollador:** Santiago
- **Inspiración:** Cartas tradicionales con tecnología moderna
- **Iconos:** SVG personalizados
- **Tipografía:** Google Fonts - Itim

---

**💡 Idea:** Perfecto para cumpleaños, aniversarios, propuestas o cualquier mensaje especial que quieras hacer memorable.

¡Comparte el enlace y sorprende a alguien especial! 🎉
