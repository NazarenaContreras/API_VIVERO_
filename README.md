<img width="1160" height="641" alt="image" src="https://github.com/user-attachments/assets/26766639-ce7d-4a4b-83df-f86a807ddc95" />


## 🌱 API Vivero

API RESTful para la gestión de un vivero: clientes, plantas y ventas.

📋 Descripción

Sistema backend desarrollado en Node.js y Express que permite administrar:

Clientes: Registro y gestión de información de clientes

Plantas: Catálogo de plantas con stock y precios

Ventas: Procesamiento de ventas con control de inventario

Autenticación: Sistema seguro con JWT


## 🚀 Tecnologías

Node.js - Entorno de ejecución

Express - Framework web

JWT - Autenticación y autorización

bcryptjs - Encriptación de contraseñas

express-validator - Validación de datos

UUID - Generación de IDs únicos

---
## 📁 Estructura del Proyecto

TPI-MODULO-3/

├── Backend/

│   ├── controllers/     # Lógica de controladores

│   ├── services/        # Lógica de negocio

│   ├── routes/          # Definición de rutas

│   ├── models/          # Modelos de datos

│   ├── middlewares/     # Middlewares (auth, validación, errores)

│   └── data/            # Archivos JSON (base de datos)

├── public/              # Frontend

├── server.js            # Punto de entrada

├── .env                 # Variables de entorno

└── package.json         # Dependencias

---

## ⚙️ Instalación

1. Clonar el repositorio

git clone https://github.com/tu-usuario/api-vivero.git

cd api-vivero

2. Instalar dependencias

npm install --save-dev nodemon body-parser

express

cors

dotenv

bcryptjs

jsonwebtoken

express-validator

uuid

3. Configurar variables de entorno

Crear un archivo .env en la raíz del proyecto:

NODE_ENV=development

JWT_SECRET=tu_clave_super_secreta_minimo_32_caracteres

PORT=3000


4. Iniciar el servidor

Modo desarrollo (con nodemon):

npm run dev

Modo producción:

npm start

El servidor estará corriendo en 👉 http://localhost:3000


---

##  📡 Endpoints principales

*🔐 Autenticación*

POST /auth/register → Crear usuario

POST /auth/login → Iniciar sesión

*🌿 Plantas*

GET /plants → Listar plantas

POST /plants → Crear planta

GET /plants/:id → Buscar planta por ID

PUT /plants/:id → Actualizar planta

DELETE /plants/:id → Eliminar planta

*👥 Clientes*

GET /clients → Litar clientes

GET /clients/:id → Buscar cliente por ID

POST /clients → Crear cliente

PUT /clients/:id → Actualizar cliente 

DELETE /clients/:id → Eliminar cliente

*🛒 Ventas*

GET /sales  →  Listar ventas

GET /sales/:id  → Obtener venta por ID

POST /sales →  Crear venta

PUT /sales/:id/status →  Modificar estado de la venta

DELETE /sales/:id →  Eliminar venta

---

## 🔒 Autenticación

La API utiliza JWT (JSON Web Tokens) para autenticación.

Cómo usar el token:

Registrar usuario o iniciar sesión

Obtener el token de la respuesta

Incluir el token en el header de las peticiones:

Authorization: Bearer tu_token_jwt_aqui

---

## ✅ Validaciones

La API valida automáticamente:

Clientes: Email válido, teléfono mínimo 7 caracteres

Plantas: Precio positivo, stock entero no negativo

Ventas: Cliente existe, stock suficiente, items válidos

Auth: Username mínimo 3 caracteres, password mínimo 6 caracteres

---

## 🛠️ Scripts Disponibles

npm start        # Iniciar servidor en producción

npm run dev      # Iniciar servidor en desarrollo (nodemon)

---

## 🌐 Deployment

La API está lista para ser desplegada en plataformas como: Render

El puerto se configura automáticamente mediante process.env.PORT.

---

## 👥 Autores

Nazarena Contreras

Mary Lezama 


---
### ¡Listo! 🚀

Desarrollado con ❤️ por el equipo del Vivero.

⭐ Si te gustó este proyecto, no olvides darle una estrella en GitHub