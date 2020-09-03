const express = require('express');
const app = express();

const movies = require('./movies.json');

app.use(express.static('public'));

app.set('view engine', 'hbs');

app.get('/', (req,res)=>{
  res.render('index',{
    name: 'Rufus',
    html: '<h1>You can write html here</h1>',
    todos: [
      'learn node',
      'learn react',
      'play nintendo'
    ]
  });
});

app.get('/movies', (req,res)=>{
  res.render('moviesView',{movies});
});

app.listen(3000,()=>{
  console.log('Listening on port 3000');
});