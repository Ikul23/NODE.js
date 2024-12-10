const { express, startServer } = require('./server'); 
const { updateLog } = require('./logging');
const app = express(); 


let mainPageClicks = 0;  
let aboutPageClicks = 0; 


app.get('/', (req, res) => {
  mainPageClicks++; 
  updateLog('Главная страница'); 
  res.send(`
    <h1>Главная страница</h1>
    <p>Количество кликов на главной странице: ${mainPageClicks}</p>
    <a href="/about">Перейти на страницу обо мне</a>
  `);
});


app.get('/about', (req, res) => {
  aboutPageClicks++; 
  updateLog('Страница обо мне:'); 
  res.send(`
    <h1>Страница обо мне</h1>
    <p>Количество кликов на странице "Обо мне": ${aboutPageClicks}</p>
    <a href="/">Перейти на главную страницу</a>
  `);
});


app.use((req, res) => {
  updateLog(req.url);
  res.status(404).send('<h1>СТРАНИЦА НЕ НАЙДЕНА!!!</h1>');
});


const port = 3000;
startServer(app, port);

