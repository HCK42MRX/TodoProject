const express = require('express');
const taskController = require('../controllers/taskController')


const router = express.Router();

router.get('/', taskController.getTask).post('/', taskController.postTask)

module.exports = router;
