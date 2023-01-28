var express = require('express');
const user = require('../controllers/user');
var router = express.Router();

/* GET users listing. */
router.post('/signup', user.signup);
router.post('/login', user.login);

module.exports = router;
