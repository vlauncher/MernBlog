const express = require('express');
const router = express.Router();
const { getPosts,createPosts,updatePosts,deletePosts } = require('../controllers/postsControllers');
const { protect } = require('../middleware/auth');

router.get('/list',protect,getPosts);
router.post('/create',protect,createPosts);
router.put('/update/:id',protect,updatePosts);
router.delete('/delete/:id',protect,deletePosts);

module.exports = router;
