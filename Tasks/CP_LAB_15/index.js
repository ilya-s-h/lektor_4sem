const m = require('mongoose');
const express = require('express');
const UserModel = require('./user.js');
const http = require('http');

const { URL } = process.env;
const User = UserModel(m);
const app = express();

app.get('/', (req, res) => {res.send('App\'s working')})
.get('/add', (req, res) => {
  console.log(URL);
  const user = new User({
    name: 'herzen@fred3105@mail.ru',
    password: '52'
  });
  user.save((err, user) => {
    if (err) {
      console.log('Error:', err);
      res.send('Error');
    }
    else{
      console.log('User saved:', user);
      res.send('User saved');
    }
  });
})
.get('/addfrompage', (req, res) =>
{
  http.get('http://kodaktor.ru/g/_unsafe/65e39', (ress) => {
    buffer = '';
    ress.on('data', (data) => (buffer += data));
    ress.on('end', () => {
      const user = new User({
        name: 'herzen@fred3105@mail.ru',
        password: buffer
      });
      user.save((err, user) => {
        if (err) {
          console.log('Error:', err);
          res.send('Error');
        }
        else {
          console.log('User saved:', user);
          res.send('User saved');
        }
      });
    });
  });
})
app.listen(async () => {
    await m.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
});