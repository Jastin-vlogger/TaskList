var express = require('express');
const todo = require('../controllers/todo');
const auth = require('../middlewares/auth');
var router = express.Router();

/* todo */
router.get('/getTask',auth, todo.getTask);
router.post('/addTask/:token',auth, todo.addTask);
router.delete('/deleteTask/:id/:token', todo.deleteTask);

module.exports = router;
