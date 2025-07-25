const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello from United Impact Backend!');
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Git World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});
app.get('/contact', (req, res) => {
 res.send { 'Contact us at contact@example.com');
})
app.get('/login', (req, res) => {
 res.send('login page coming soon, ');
})
node_modules/
.env
.DS_Store
*.log
