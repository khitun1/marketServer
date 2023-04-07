const express = require('express');
const router = express();
const roleMiddleware = require('../middleware/checkRoleMiddleware');
const brandController = require('../controllers/brandController');

router.get('/getAll', brandController.getBrands);
router.post('/create', roleMiddleware, brandController.createBrand);
router.post('/getOne', brandController.getBrand);
router.post('/delete', roleMiddleware, brandController.deleteBrand);

module.exports = router;