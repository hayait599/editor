import express from 'express';
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.send(200)
 // res.render('index', { title: 'Express' });
});

export default router;
