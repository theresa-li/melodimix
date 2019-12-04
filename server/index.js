const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const YT_URI = 'https://www.googleapis.com/youtube/v3';
const YT_API = require('./config/youtube.js');

// app.use(express.static(__dirname + '/../public'));

app.get('/api/searchYT/:query', (req, res) => {
  console.log(`Searching for ${req.params.query}`);
  fetch(`${YT_URI}/search?key=${YT_API}&q=${req.params.query}&part=snippet`)
    .then(videos => videos.json())
    .then(videos => res.send(videos))
    .catch(err => res.send(err));
});

app.listen(port, () => console.log(`listening on port ${port}`));