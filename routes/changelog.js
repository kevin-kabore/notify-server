var express = require('express');
var rp = require('request-promise');
var router = express.Router();

router.get('/', function(req, res, next) {
  rp({
    uri: 'https://api.github.com/gists/46cf621bdcf2ed59606d3c2ba0029e70',
    json: true,
    headers: {
      'User-Agent': 'kevin-kabore',
      Authorization: 'token 29b35ba2eef5dd5753dc37903b72e43dbb457d4f'
    }
  })
    .then(function(data) {
      var content = data.files.changelog.content;
      res.send(content);
    })
    .catch(function(err) {
      res.send(err);
    });
});

module.exports = router;
