// require('dotenv').config();
// const express = require('express');
// const mysql = require('mysql2');
// const app = express();


// // Create a connection to the database
// const db = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD.replace(/"/g, ''), // Remove quotes from password
//   database: process.env.DB_NAME
// });

// // Connect to the database
// db.connect((err) => {
//   if (err) {
//     console.error('Database connection error:', err);
//     return;
//   }
//   console.log('Database connected');
// });

// // Root route
// app.get('/', (req, res) => {
//     res.send('Welcome to the Hospital API');
// });


// // Question 1 goes here
// app.get('/patients', (req, res) => {
//     const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
//     db.query(query, (err, results) => {
//       if (err) {
//         res.status(500).send(err);
//         return;
//       }
//       res.json(results);
//     });
// });


// // Question 2 goes here
// app.get('/providers', (req, res) => {
//     const query = 'SELECT first_name, last_name, provider_specialty FROM providers';
//     db.query(query, (err, results) => {
//       if (err) {
//         res.status(500).send(err);
//         return;
//       }
//       res.json(results);
//     });
// });


// // Question 3 goes here
// app.get('/patients/:first_name', (req, res) => {
//     const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
//     db.query(query, [req.params.first_name], (err, results) => {
//       if (err) {
//         res.status(500).send(err);
//         return;
//       }
//       res.json(results);
//     });
// });


// // Question 4 goes here
// app.get('/providers/specialty/:specialty', (req, res) => {
//     const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
//     db.query(query, [req.params.specialty], (err, results) => {
//       if (err) {
//         res.status(500).send(err);
//         return;
//       }
//       res.json(results);
//     });
// });


// // Listen to the server
// const PORT = process.env.PORT || 3200;
// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const app = express();

// Create a connection to the database
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD.replace(/"/g, ''), // Remove quotes from password
  database: process.env.DB_NAME
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Database connected');
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Hospital API');
});

// Question 1 goes here
app.get('/patients', (req, res) => {
  const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Question 2 goes here
app.get('/providers', (req, res) => {
  const query = 'SELECT first_name, last_name, provider_specialty FROM providers';
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Question 3 goes here
app.get('/patients/:first_name', (req, res) => {
  const query = 'SELECT patient_id, first_name, last_name, date_of_birth FROM patients WHERE first_name = ?';
  db.query(query, [req.params.first_name], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Question 4 goes here
app.get('/providers/specialty/:specialty', (req, res) => {
  const query = 'SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?';
  db.query(query, [req.params.specialty], (err, results) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    res.json(results);
  });
});

// Listen to the server
const PORT = process.env.PORT || 3200;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});