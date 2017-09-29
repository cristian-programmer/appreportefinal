var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('reportelogicmachine');
});

router.get('logicmachine',function(req, res, next){
	 
	res.json(req);
});
module.exports = router;