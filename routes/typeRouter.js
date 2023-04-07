const express = require('express');
const router = express();
const roleMiddleware = require('../middleware/checkRoleMiddleware');
const typeController = require('../controllers/typeController');

router.post('/create', roleMiddleware, typeController.createType);
router.get('/getAll', typeController.getTypes);
router.post('/delete', roleMiddleware, typeController.deleteType);
router.post('/getOne', typeController.getType);

module.exports = router;