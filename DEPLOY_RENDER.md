# 🚀 GUÍA DE DESPLIEGUE EN RENDER (Paso a Paso)

Esta guía explica cómo publicar la página web **"La Biblia en Acción"** en [Render.com](https://render.com) de manera **100% gratuita y sin caídas**.

---

## 🌟 OPCIÓN RECOMENDADA: Como "Static Site" (Gratis, Rápido y Permanente)

Al desplegarlo como **Static Site**, Render aloja los archivos en su red global CDN. Es **completamente gratuito, carga al instante y nunca se "apaga" ni se suspende**.

### Pasos para Configurar en Render:

1. **Subir tu proyecto a GitHub / GitLab:**
   - Sube la carpeta del proyecto a un repositorio de GitHub (público o privado).

2. **Crear nuevo servicio en Render:**
   - Inicia sesión en [Render.com](https://dashboard.render.com).
   - Haz clic en el botón azul **"New +"** (arriba a la derecha).
   - Selecciona **"Static Site"**.

3. **Conectar tu Repositorio:**
   - Selecciona tu repositorio de GitHub donde subiste el proyecto.

4. **Completar la Configuración (Valores exactos):**

| Campo en Render | Valor a Escribir |
| :--- | :--- |
| **Name** | `la-biblia-en-accion` (o el nombre que prefieras) |
| **Branch** | `main` (o la rama donde esté tu código) |
| **Root Directory** | *(Dejar en blanco / vacío)* |
| **Build Command** | *(Dejar en blanco / vacío)* |
| **Publish Directory** | `public` |

5. **Haz clic en "Create Static Site":**
   - En menos de 1 minuto, Render te entregará tu enlace público oficial:  
     👉 `https://la-biblia-en-accion.onrender.com`

---

## ⚡ ¿Por qué funciona todo en el Static Site?

1. **Imágenes completas:** Todas las 13 ilustraciones originales están dentro de la carpeta `public/IMAGES/`, por lo que se visualizan sin fallas.
2. **Interactividad total:**
   - Cuenta regresiva dinámica al 27 de octubre.
   - Menú móvil táctil para celulares.
   - Modales pedagógicos de cada estación con versículos y objetivos.
   - Trivia bíblica del pingüino con puntaje y confeti.
   - Botón de dar corazón (❤️) con almacenamiento en memoria local (`localStorage`).

---

## 🛠️ OPCIÓN 2: Como "Web Service" con Servidor Node.js

Si prefieres usar el servidor Node.js (`server.js`):

1. En Render, selecciona **"New +"** ➔ **"Web Service"**.
2. Configura los siguientes campos:
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Plan:** `Free`
3. Haz clic en **"Create Web Service"**.
