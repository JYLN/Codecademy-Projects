const {
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

const minionsRouter = require('express').Router();

minionsRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('minions'));
});

minionsRouter.post('/', (req, res, next) => {
  const newMinion = addToDatabase('minions', req.body);
  res.status(201).send(newMinion);
});

minionsRouter.param('minionId', (req, res, next, id) => {
  const foundMinion = getFromDatabaseById('minions', id);
  if (foundMinion) {
    req.minion = foundMinion;
    return next();
  }
  return res.status(404).send();
});

minionsRouter.get('/:minionId', (req, res, next) => {
  res.send(req.minion);
});

minionsRouter.put('/:minionId', (req, res, next) => {
  const updatedMinion = updateInstanceInDatabase('minions', req.body);
  res.send(updatedMinion);
});

minionsRouter.delete('/:minionId', (req, res, next) => {
  const deletedMinion = deleteFromDatabasebyId('minions', req.minion.id);
  if (deletedMinion) {
    return res.status(204).send();
  }
  return res.status(500).send();
});

module.exports = minionsRouter;
