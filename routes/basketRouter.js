const express = require('express');
const router = express();
const authMiddleware = require('../middleware/checkAuthMiddleware');
const basketController = require('../controllers/basketController');

router.get('/get', authMiddleware, basketController.getBasket);
router.post('/clear', authMiddleware, basketController.clearBasket);
router.post('/remove', authMiddleware, basketController.removeItemFromBasket);
router.post('/add', authMiddleware, basketController.addItemToBasket);

module.exports = router;