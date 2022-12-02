const express = require('express');
const router = express.Router();
const { register,login,logout,getusers } = require('../controllers/usersControllers');
const { protect } = require('../middleware/auth');

router.get('/users',protect,getusers);
router.post('/register',register);
router.post('/login',login);
router.post('/logout',logout);

module.exports = router;