const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs').promises;
const path = require('path');
const { all } = require('express/lib/application');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const talkerFile = path.resolve(__dirname, './talker.json');

// não remova esse endpoint, e para o avaliador funcionar 
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
  console.log('Online');
});
//-----------------------------------------------------

// 1 º
app.get('/talker', async (_req, res) => {
  const talker = await fs.readFile(talkerFile, 'utf-8');
  const response = talker ? JSON.parse(talker) : [];
  res.status(HTTP_OK_STATUS).json(response);
});

// 2 º
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talkerJson = await fs.readFile(talkerFile, 'utf-8');
  const Talkers = JSON.parse(talkerJson);
  const talkerRes = Talkers.find((t) => t.id === Number(id));

  if (talkerRes) {
    return res.status(HTTP_OK_STATUS).json(talkerRes);
  } 
  return res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
  });
});