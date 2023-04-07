const express = require('express');
const router = express();
const authMiddleware = require('../middleware/checkAuthMiddleware');
const userController = require('../controllers/userController');

router.post('/login', userController.login);
router.post('/signUp', userController.signUp);
router.get('/auth', authMiddleware, userController.auth);

module.exports = router;