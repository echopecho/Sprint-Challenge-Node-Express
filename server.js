const express = require('express');
const cors = require('cors');
const projectRouter = require('./projects/project-router.js');
const actionRouter = require('./actions/action-router.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use('/api/projects', projectRouter);
server.use('/api/actions', actionRouter);

module.exports = server;