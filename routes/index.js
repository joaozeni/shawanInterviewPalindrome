var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { response: 'fdkjafksdl'});
  console.log(req.body)
});


router.post('/', function(req, res, next) {
  //res.render('index', { response: 'fdkjafksdl'});
  res.send(200);
  console.log(req.data)
});

module.exports = router;
