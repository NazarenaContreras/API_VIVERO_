/**
 * SERVER.JS - Punto de entrada principal de la API
 * 
 * Funcionalidades:
 * - Carga variables de entorno (.env)
 * - Configura middlewares globales (CORS, JSON parsing)
 * - Conecta todas las rutas de la API
 * - Manejo de errores centralizado
 * - Listo para despliegue en Render
 */

const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const dotenv = require('dotenv');
const connectDB = require("./Backend/database");

// Inicializar configuración .env
dotenv.config();

// Verificar JWT_SECRET
if (!process.env.JWT_SECRET) {
  console.error('❌ ERROR: JWT_SECRET no está definido en .env');
  process.exit(1);
}

const app = express();

// Conectar a la base de datos
connectDB();

// ========== MIDDLEWARES DE SEGURIDAD ==========

// Seguridad de Headers con CSP ajustado para el Frontend
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        "default-src": ["'self'"],
        "script-src": ["'self'", "'unsafe-inline'"], 
        "img-src": ["'self'", "https:", "data:"],
      },
    },
  })
);

// Control de Tráfico (Rate Limit)
const limiter = rateLimit({
  windowMs: 30 * 1000, // 30 segundos
  max: 10, // Aumentado a 10 para evitar bloqueos accidentales en pruebas
  message: 'Demasiados intentos, intenta de nuevo en un momento.',
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Permisos de comunicación entre dominios
app.use(cors());

// Lectura de datos JSON
app.use(express.json());

// ========== ARCHIVOS ESTÁTICOS (FRONTEND) ==========
// Importante: Esto sirve tu index.html, style.css y script.js
app.use(express.static('Public')); 

// ========== IMPORTAR RUTAS ==========
const authRoutes = require('./Backend/routes/authRoutes');
const clientRoutes = require('./Backend/routes/clientRoutes');
const plantRoutes = require('./Backend/routes/plantRoutes');
const saleRoutes = require('./Backend/routes/saleRoutes');
const { errorHandler, notFoundHandler } = require('./Backend/middlewares/errorHandler');

// ========== RUTAS DE LA API ==========

// Ruta de salud del sistema
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    status: 'healthy',
    timestamp: new Date().toISOString(),
  });
});

// Montaje de rutas
app.use('/auth', authRoutes);
app.use('/clients', clientRoutes);
app.use('/plants', plantRoutes); // 
app.use('/sales', saleRoutes);

// Manejo de rutas no encontradas y errores globales
app.use(notFoundHandler);
app.use(errorHandler);

// ========== INICIAR SERVIDOR ==========
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('=================================');
  console.log(`🚀 SERVIDOR VIVERO SEGURO`);
  console.log(`📡 URL Local: http://localhost:${PORT}`);
  console.log('=================================');
});

// Manejo de errores críticos
process.on('uncaughtException', (err) => {
  console.error('❌ Error Crítico:', err);
  process.exit(1);
});