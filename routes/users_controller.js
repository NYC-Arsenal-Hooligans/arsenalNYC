'use strict'
//require express router
const router = require('express').Router();


// / route /api/users
router.get('/', function(req,res){
  res.send('route /api/users');
}) //end /api/users


//export it
module.exports = router;
