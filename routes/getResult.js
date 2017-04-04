var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  
  res.send({ 
      status: '1',
      message:'success', 
      data: {
          a:1,
          b:2
      }
    });
});

module.exports = router;
