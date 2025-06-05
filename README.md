# PC_LEARN Frontend

Este es un proyecto construido con [Vite](https://vitejs.dev/) + [React](https://react.dev/), utilizando [Tailwind CSS](https://tailwindcss.com/) y [pnpm](https://pnpm.io/) <!-- y la librería de componentes [shadcn/ui](https://ui.shadcn.dev/). -->

## 🧑‍💻 Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) versión **18 o superior**
- [pnpm](https://pnpm.io/installation) instalado globalmente:

  ```bash
  npm install -g pnpm
  ```

---

## ⚙️ Configuración inicial del proyecto

### 1. Clonar el repositorio

```bash
git clone git@github.com:steven-cl/PC_Learn.git 
cd PC_Learn
```

- o en caso de que no uses ssh:
```bash
git clone https://github.com/steven-cl/PC_Learn.git
cd PC_Learn
```

### 2. Instalar dependencias

```bash
pnpm install
```

---


## 🚀 Ejecutar en modo desarrollo

```bash
pnpm dev
```

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

---

## 📁 Estructura del proyecto

```
PC_Learn/
├── public/              → Imágenes, íconos, fuentes, etc.(publicos)
├── src/
│   ├── assets/          → Imágenes, íconos, fuentes, etc.(internos de la app)
│   ├── components/      → Componentes reutilizables (botones, inputs, etc.)
│   ├── layouts/         → Plantillas/layouts principales (Dashboard, AuthLayout, etc.)
│   ├── lib/             → Funciones js auxiliares, lógica compartida (helpers, validadores, etc.)
│   ├── pages/           → Paginas dentro de la app hechas en react
│   ├── index.css        
│   └── main.jsx         → Punto de entrada (crea el root de React)
├── index.html           → index del proyecto
├── tailwind.config.js
├── postcss.config.js
├── package.json
├── pnpm-lock.yaml
└── .gitignore
```
<!--More to add on this project file structure-->

---