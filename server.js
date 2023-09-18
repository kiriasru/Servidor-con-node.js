let http = require('http');
let chalk = require('chalk');
let host = 'localhost';
let port = '8080';

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const responseData = {
    nombre: 'Kevin Irias',
    mensaje: 'Hola, Mundo, desde mi servidor.'
  };
  res.end(JSON.stringify(responseData));
});

server.listen(port, host, () => {
  console.log(chalk.green('El servidor está corriendo en: http://' + host + ':' + port));
});