const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./utils/config');
const blogsRouter = require('./controllers/blog');

mongoose.connect(config.MONGODB_URI);

app.use(cors());
app.use(express.json());
app.use(blogsRouter);

module.exports = app;
