const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = new express();
const ejs = require('ejs');

mongoose.connect('mongodb://localhost/my_database', {useNewUrlParser: true});

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.listen(4000, () => {
  console.log('Listening on port 4000');
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/post', (req, res) => {
  res.render('post');
});