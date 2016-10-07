'use strict'
//require express router
const router = require('express').Router();
const { listMembers } = require('../models/members');


router.post('/',
  members.createMember,
  (req,res) => res.status(201).json({data: 'success'}).end()
  )

// / route /api/users
router.get('/', listMembers , (req,res) =>
  res.send('res.members')
) //end /api/users


//export it
module.exports = router;
