const express = require("express");
const routes = require('./routes')
const db = require('./db')
const app = express();
const logger = require('morgan')

const PORT = process.env.PORT || 3000;

app.use(express.json())

app.use('/', routes)

app.use(logger('dev'))

db.on('error', console.error.bind(console, "MongoDB connection error"))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))