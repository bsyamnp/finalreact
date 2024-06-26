// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = 3001; // Порт сервера

// Подключение к базе данных
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Ваше имя пользователя MySQL
  password: '', // Ваш пароль MySQL
  database: 'portfolio_db', // Имя вашей базы данных
});

connection.connect();

// Middleware для парсинга JSON-тела запроса
app.use(bodyParser.json());

// Маршруты для операций CRUD
app.get('/portfolio/items', (req, res) => {
  connection.query('SELECT * FROM portfolio_items', (error, results) => {
    if (error) throw error;
    res.json(results);
  });
});

app.post('/portfolio/items', (req, res) => {
  const newItem = req.body;
  connection.query('INSERT INTO portfolio_items SET ?', newItem, (error, result) => {
    if (error) throw error;
    res.json({ message: 'Item added successfully', id: result.insertId });
  });
});

app.put('/portfolio/items/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  connection.query('UPDATE portfolio_items SET ? WHERE id = ?', [updatedItem, itemId], (error, result) => {
    if (error) throw error;
    res.json({ message: 'Item updated successfully' });
  });
});

app.delete('/portfolio/items/:id', (req, res) => {
  const itemId = req.params.id;
  connection.query('DELETE FROM portfolio_items WHERE id = ?', itemId, (error, result) => {
    if (error) throw error;
    res.json({ message: 'Item deleted successfully' });
  });
});

// Слушаем порт
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
