<img width="1160" height="641" alt="image" src="https://github.com/user-attachments/assets/26766639-ce7d-4a4b-83df-f86a807ddc95" />


# 🌱 API Vivero

API RESTful para la gestión de un vivero: clientes, plantas y ventas.

---

## 📋 Descripción

Sistema backend desarrollado con **Node.js** y **Express** que permite administrar un vivero mediante una API REST.  
La aplicación permite gestionar clientes, catálogo de plantas y ventas, incluyendo autenticación segura mediante tokens JWT.

Este proyecto fue desarrollado como trabajo práctico académico para practicar arquitectura de APIs, autenticación y manejo de base de datos.

---

## 🚀 Tecnologías

- Node.js – Entorno de ejecución
- Express – Framework para APIs
- MongoDB – Base de datos NoSQL
- Mongoose – Modelado de datos para MongoDB
- JSON Web Token (JWT) – Autenticación
- bcryptjs – Encriptación de contraseñas
- express-validator – Validación de datos
- dotenv – Manejo de variables de entorno
- nodemon – Reinicio automático del servidor en desarrollo

---

## 📁 Estructura del Proyecto

```
API_VIVERO/

├── Backend/
│   ├── controllers/        # Controladores de la API
│   │
│   ├── middlewares/        # Middlewares de autenticación, validación y errores
│   │
│   ├── models/             # Modelos de datos
│   │
│   ├── routes/             # Definición de rutas
│   │
│   └── services/           # Lógica de negocio
│
├── Public/                 # Archivos del frontend
│
├── .env                    # Variables de entorno
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js               # Punto de entrada del servidor
```

---

## ⚙️ Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/api-vivero.git
cd api-vivero
```

### 2. Instalar dependencias

```bash
npm install
```

---

### 3. Configurar variables de entorno

Crear un archivo `.env` en la raíz del proyecto:

```env
NODE_ENV=development
PORT=3000
JWT_SECRET=tu_clave_super_secreta
MONGO_URI=mongodb://localhost:27017/api_vivero
```

---

### 4. Iniciar el servidor

Modo desarrollo:

```bash
npm run dev
```

Modo producción:

```bash
npm start
```

El servidor estará disponible en:

```
http://localhost:3000
```

---

## 📡 Endpoints principales

### 🔐 Autenticación

POST /auth/register → Crear usuario  
POST /auth/login → Iniciar sesión  

---

### 🌿 Plantas

GET /plants → Listar plantas  
POST /plants → Crear planta  
GET /plants/:id → Buscar planta por ID  
PUT /plants/:id → Actualizar planta  
DELETE /plants/:id → Eliminar planta  

---

### 👥 Clientes

GET /clients → Listar clientes  
GET /clients/:id → Buscar cliente por ID  
POST /clients → Crear cliente  
PUT /clients/:id → Actualizar cliente  
DELETE /clients/:id → Eliminar cliente  

---

### 🛒 Ventas

GET /sales → Listar ventas  
GET /sales/:id → Obtener venta por ID  
POST /sales → Crear venta  
PUT /sales/:id/status → Modificar estado de la venta  
DELETE /sales/:id → Eliminar venta  

---

## 🔒 Autenticación

La API utiliza **JWT (JSON Web Tokens)** para autenticar usuarios.

### Uso del token

1. Registrar usuario o iniciar sesión  
2. Obtener el token en la respuesta  
3. Incluir el token en el header de las peticiones  

```
Authorization: Bearer tu_token_jwt
```

---

## ✅ Validaciones

La API valida automáticamente:

**Clientes**
- Email válido
- Teléfono mínimo 7 caracteres

**Plantas**
- Precio positivo
- Stock entero no negativo

**Ventas**
- Cliente existente
- Stock suficiente
- Items válidos

**Auth**
- Username mínimo 3 caracteres
- Password mínimo 6 caracteres

---

## 🛠️ Scripts disponibles

```bash
npm start      # Iniciar servidor en producción
npm run dev    # Iniciar servidor en desarrollo
```

---

## 🌐 Deployment

La API puede ser desplegada en plataformas como **Render**.

El puerto se configura automáticamente mediante:

```
process.env.PORT
```
### 📮 Colección de Postman
La colección de endpoints usada para probar la API está disponible en el siguiente enlace:

[Ver colección en Postman](https://nazarenacontreras9-3919597.postman.co/workspace/Nazarena-Con's-Workspace~ee8cbf6c-4829-4536-8941-4a37920e4a46?action=share&source=copy-link&creator=48089822)

Importar este link en Postman para acceder a todos los requests (autenticación, plantas, clientes y ventas).

---

## 👥 Autores
---
<<<<<<< HEAD
Nazarena Contreras

Mary Lezama 

=======
- Nazarena Contreras  
- Mary Lezama  
>>>>>>> 7491b835ac6950560aa4ed386792b36c5ecc3065

---

## 🚀 Proyecto académico

<<<<<<< HEAD
⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub
=======
Trabajo práctico desarrollado para la práctica de desarrollo de APIs REST con Node.js, Express y MongoDB.
>>>>>>> 7491b835ac6950560aa4ed386792b36c5ecc3065
