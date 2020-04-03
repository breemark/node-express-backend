const router = require('express').Router();

// Import Controller Methods
const { login } = require('../controllers/auth');

router.post('/login', login);

module.exports = router;