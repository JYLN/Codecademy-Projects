const checkMillionDollarIdea = require('./checkMillionDollarIdea');
const {
  getAllFromDatabase,
  addToDatabase,
  getFromDatabaseById,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
} = require('./db');

const ideasRouter = require('express').Router();

ideasRouter.get('/', (req, res, next) => {
  res.send(getAllFromDatabase('ideas'));
});

ideasRouter.post('/', checkMillionDollarIdea, (req, res, next) => {
  const newIdea = addToDatabase('ideas', req.body);
  res.status(201).send(newIdea);
});

ideasRouter.param('ideaId', (req, res, next, id) => {
  const foundIdea = getFromDatabaseById('ideas', id);
  if (foundIdea) {
    req.idea = foundIdea;
    return next();
  }
  return res.status(404).send();
});

ideasRouter.get('/:ideaId', (req, res, next) => {
  res.send(req.idea);
});

ideasRouter.put('/:ideaId', (req, res, next) => {
  const updatedIdea = updateInstanceInDatabase('ideas', req.body);
  res.send(updatedIdea);
});

ideasRouter.delete('/:ideaId', (req, res, next) => {
  const deletedIdea = deleteFromDatabasebyId('ideas', req.idea.id);
  if (deletedIdea) {
    return res.status(204).send();
  }
  return res.status(500).send();
});

module.exports = ideasRouter;
