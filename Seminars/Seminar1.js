const http = require('http');

let clickCount = 0;

const server = http.createServer((req, res) => {

clickCount++;

  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });    
    res.end(`<p>Количество кликов: ${clickCount}</p>
      <a href="/about">Перейти на страницу обо мне</a>`);
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html; charset=utf-8' });
    res.end(`<p>Количество кликов: ${clickCount}</p>
      <a href="/">Перейти на главную страницу</a>`);
  } else {
    res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
    res.end('<h1>СТРАНИЦА НЕ НАЙДЕНА!!!</h1>');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
