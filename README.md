# 🌐 Zero Portfolio

Portfolio personal construido con React, enfocado en diseño, animaciones
y una experiencia fluida.

------------------------------------------------------------------------

## 🚀 Tecnologías

-   React
-   JavaScript (ES6+)
-   CSS / Tailwind (si aplica)
-   GitHub Pages (deploy)

------------------------------------------------------------------------

## ⚙️ Instalación

Clona el repositorio e instala dependencias:

``` bash
git clone https://github.com/zer0-sh/git.git
cd git
npm install
```

------------------------------------------------------------------------

## ▶️ Ejecutar en desarrollo

``` bash
npm start
```

La app estará disponible en:

http://localhost:3000

------------------------------------------------------------------------

## 🏗️ Build para producción

``` bash
npm run build
```

Esto generará la carpeta:

/build

------------------------------------------------------------------------

## 🌍 Deploy (GitHub Pages)

Este proyecto se despliega automáticamente usando GitHub Actions.

### Flujo:

1.  Hacer cambios\
2.  Commit y push:

``` bash
git add .
git commit -m "update"
git push origin deploy
```

3.  GitHub Actions:
    -   construye el proyecto
    -   publica en la rama `gh-pages`

------------------------------------------------------------------------

## ⚠️ Rutas en GitHub Pages

Este proyecto usa `HashRouter` para evitar problemas de rutas.

Ejemplo:

https://zer0-sh.github.io/git/#/es

------------------------------------------------------------------------

## 🌙 Tema

-   🌞 Light (Naruto theme)\
-   🌑 Dark (Obito theme)

El tema se guarda en `localStorage`.

------------------------------------------------------------------------

## 🧪 Problemas conocidos

-   Algunas vulnerabilidades provienen de dependencias internas
    (`react-scripts`)
-   No afectan el funcionamiento del proyecto

------------------------------------------------------------------------

## 📦 Estructura

    src/
     ├── components/
     ├── context/
     ├── pages/
     ├── styles/
     └── App.jsx

------------------------------------------------------------------------

## ✨ Autor

Steven Muñoz
