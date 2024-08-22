const express = require('express');
const router = express.Router();
const { createVendor, getVendors, getVendorById, updateVendor, deleteVendor, getVendorPerformance } = require('../controllers/vendorController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createVendor).get(protect, getVendors);
router.route('/:vendorId').get(protect, getVendorById).put(protect, updateVendor).delete(protect, deleteVendor);
router.route('/:vendorId/performance').get(protect, getVendorPerformance);

module.exports = router;
