const express = require('express');
const minionsRouter = require('./minions');
const ideasRouter = require('./ideas');
const apiRouter = express.Router();

apiRouter.use('/minions', minionsRouter);
apiRouter.use('/ideas', ideasRouter);

module.exports = apiRouter;
