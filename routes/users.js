var express = require('express');
var router = express.Router();
var Admin = require('../models/admin');

/* GET users listing. */
router.get('/', function(req, res) {
  var admin = new Admin();
  admin.save();
  res.send('respond with a resource');
});

module.exports = router;
