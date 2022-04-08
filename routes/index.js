const express = require('express');
const router = express.Router();
const personController = require('../controller/person')

router.post('/person', personController.createPerson)

module.exports = router