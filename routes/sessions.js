var router = require('express').Router();

router.get('/', function(req, res, next){
  res.send('TODO GET');
});

router.delete('/', function(req, res, next){
  res.send('TODO DELETE');
});

router.post('/', function(req, res, next){
  res.send('TODO POST');
});

module.exports = router;
