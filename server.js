const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_PATH = path.join(__dirname, 'data', 'db.json');

app.use(cors());
app.use(express.json());

// Servir archivos estáticos del frontend
app.use(express.static(path.join(__dirname, 'public')));

// Servir imágenes directamente desde la carpeta IMAGES
app.use('/IMAGES', express.static(path.join(__dirname, 'IMAGES')));

// Funciones auxiliares para leer y escribir en la base de datos JSON
function readDB() {
  try {
    const rawData = fs.readFileSync(DB_PATH, 'utf-8');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error al leer db.json:', error);
    return {
      estacionesReacciones: {
        parvulos: 30,
        principiantes: 24,
        primarios: 36,
        intermedios: 31,
        preadolescentes: 27,
        adolescentes: 34
      }
    };
  }
}

function writeDB(data) {
  try {
    fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (error) {
    console.error('Error al escribir en db.json:', error);
    return false;
  }
}

// API: Obtener datos de reacciones
app.get('/api/data', (req, res) => {
  const db = readDB();
  res.json(db);
});

// API: Reaccionar a una estación bíblica
app.post('/api/react', (req, res) => {
  const { stationId } = req.body;
  if (!stationId) {
    return res.status(400).json({ error: 'Se requiere stationId' });
  }

  const db = readDB();
  if (db.estacionesReacciones[stationId] !== undefined) {
    db.estacionesReacciones[stationId] += 1;
  } else {
    db.estacionesReacciones[stationId] = 1;
  }

  writeDB(db);
  res.json({
    success: true,
    stationId,
    newCount: db.estacionesReacciones[stationId]
  });
});

// Ruta de estado
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(`🌸 Servidor "La Biblia en Acción" en ejecución`);
  console.log(`👉 Acceso local: http://localhost:${PORT}`);
  console.log(`====================================================`);
});
