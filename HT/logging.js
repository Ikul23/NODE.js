const fs = require('fs');
const path = './log.json'; 

function loadLogs() {
  try {
    if (fs.existsSync(path)) {
      const data = fs.readFileSync(path, 'utf-8');
      return JSON.parse(data);
    }
  } catch (err) {
    console.error('Ошибка при загрузке логов:', err);
  }
  return {}; 
}


function saveLogs(logs) {
  try {
    fs.writeFileSync(path, JSON.stringify(logs, null, 2), 'utf-8');
    console.log('Логи успешно сохранены!');
  } catch (err) {
    console.error('Ошибка при сохранении логов:', err);
  }
}


function updateLog(url) {
  const logs = loadLogs();
  logs[url] = (logs[url] || 0) + 1; 
  saveLogs(logs);
}

module.exports = { updateLog };
