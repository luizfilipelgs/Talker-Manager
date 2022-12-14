const fs = require('fs').promises;
const path = require('path');

const talkerFile = path.resolve(__dirname, '..', 'talker.json');

const getAllTalkers = async () => {
  const talker = await fs.readFile(talkerFile, 'utf-8');
  const response = talker ? JSON.parse(talker) : [];
  return response;
};

const createNewTalker = async (name, age, talk) => {
  const allTalkers = await getAllTalkers();
  const id = Number(allTalkers[allTalkers.length - 1].id) + 1;
  allTalkers.push({
    name,
    age,
    id,
    talk,
  });
  await fs.writeFile(talkerFile, JSON.stringify(allTalkers, null, 2));
  return allTalkers;
};

const editTalker = async (id, body) => {
  const allTalkers = await getAllTalkers();
  const talkerEdit = allTalkers
    .map((talker) => (talker.id === Number(id) ? { id: talker.id, ...body } : talker));
  await fs.writeFile(talkerFile, JSON.stringify(talkerEdit, null, 2));
  return talkerEdit;
};

const deletTalker = async (id) => {
  const allTalkers = await getAllTalkers();
  const newTalkers = allTalkers
    .filter((talker) => (talker.id !== Number(id)));
  await fs.writeFile(talkerFile, JSON.stringify(newTalkers, null, 2));
  return newTalkers;
};

const searchTalker = async (query) => {
  const allTalkers = await getAllTalkers();
  const search = allTalkers
    .filter((talker) => talker.name.includes(query));
  return search;
};

module.exports = {
  getAllTalkers,
  createNewTalker,
  editTalker,
  deletTalker,
  searchTalker,
};
