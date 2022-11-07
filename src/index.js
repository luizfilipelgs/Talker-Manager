const express = require('express');
const bodyParser = require('body-parser');
const { validateEmail, validatePassword } = require('./middleware/ValidateLogin');
const createToken = require('./utils/token');
const { getAllTalkers, createNewTalker,
  editTalker, deletTalker } = require('./utils/handleTalkers');
const { validateToken } = require('./middleware/ValidateToken');
const { validateName, validateAge, validateTalk,
  validateRate, validateWatchedAt } = require('./middleware/ValidateTalker');

const app = express();
app.use(bodyParser.json());
 
const HTTP_OK_STATUS = 200;
const PORT = '3000';

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
  const allTalkers = await getAllTalkers();
   res.status(HTTP_OK_STATUS).json(allTalkers);
});

// 2 º
app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const allTalkers = await getAllTalkers();
  const talkerRes = allTalkers.find((t) => t.id === Number(id));

  if (talkerRes) {
    return res.status(HTTP_OK_STATUS).json(talkerRes);
  } 
  return res.status(404).json({
    message: 'Pessoa palestrante não encontrada',
  });
});

// 3º 
app.post('/login', validateEmail, validatePassword, async (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ token: createToken() });
});

// 5º
app.use(validateToken);
/* app.use('/talker',
validateName,
validateAge,
validateTalk,
validateWatchedAt,
validateRate); */

app.post('/talker',
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { name, age, talk } = req.body;

    const allTalkers = await createNewTalker(name, age, talk);
    const response = allTalkers[allTalkers.length - 1];
    res.status(201).json(response);
});

// 6º
app.put('/talker/:id',
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    const talkerEdit = await editTalker(id, body);
    const response = talkerEdit[Number(id) - 1];

    res.status(200).json(response);
});

// 7º
app.delete('/talker/:id', async (req, res) => {
  const { id } = req.params;
  deletTalker(id);
  res.status(204).json();
});