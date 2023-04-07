const express = require('express');
const router = express();
const roleMiddleware = require('../middleware/checkRoleMiddleware');
const deviceController = require('../controllers/deviceController');

router.post('/getAll', deviceController.getDevices);
router.post('/getOne', deviceController.getDevice);
router.post('/create', roleMiddleware, deviceController.createDevice);
router.post('/rate', deviceController.setDeviceRating);
router.post('/delete', roleMiddleware, deviceController.deleteDevice);

module.exports = router;