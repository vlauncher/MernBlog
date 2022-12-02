const express = require('express');
const router = express.Router();
const { index } = require('../controllers/pagesControllers');

router.get('/',index);

module.exports = router;
