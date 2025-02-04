const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors()); // Permite que React haga solicitudes al backend
app.use(express.json());

// Conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'practiques',
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
    return;
  }
  console.log('Conectado a la base de datos');
});

// Función para validar la tabla
const validarTabla = (tabla) => {
  const tablasPermitidas = ['ondormir', 'onmenjar', 'onrentarse', 'oncurarse'];
  return tablasPermitidas.includes(tabla);
};

// Endpoint genérico para consultar diferentes tablas y campos
app.get('/api/:tabla/:campo/:id', (req, res) => {
  const { tabla, campo, id } = req.params;

  // Validar tabla
  if (!validarTabla(tabla)) {
    return res.status(400).json({ error: 'Tabla no permitida' });
  }

  // Construir la consulta dinámica
  const query = `SELECT ?? FROM ?? WHERE id = ?`;

  db.query(query, [campo, tabla, id], (err, results) => {
    if (err) {
      res.status(500).json({ error: 'Error en la consulta', detalles: err });
      return;
    }

    if (results.length > 0) {
      res.json(results[0]);
    } else {
      res.status(404).json({ error: 'No se encontró el registro' });
    }
  });
});

// Inicia el servidor
app.listen(5000, () => {
  console.log('Servidor ejecutándose en http://localhost:5000');
});
