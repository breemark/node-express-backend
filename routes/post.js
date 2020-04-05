const router = require('express').Router();

// Import Controller Methods
const { create, list, read, update, remove } = require('../controllers/post');
const { requireSignin } = require('../controllers/auth');

router.post('/post', requireSignin, create);
router.get('/posts', list);
router.get('/post/:slug', read);
router.put('/post/:slug', requireSignin, update);
router.delete('/post/:slug', requireSignin, remove);

module.exports = router;