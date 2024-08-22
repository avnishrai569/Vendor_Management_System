const express = require('express');
const router = express.Router();
const { createPO, getPOs, getPOById, updatePO, deletePO, acknowledgePO } = require('../controllers/poController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').post(protect, createPO).get(protect, getPOs);
router.route('/:poId').get(protect, getPOById).put(protect, updatePO).delete(protect, deletePO);
router.route('/:poId/acknowledge').put(protect, acknowledgePO);

module.exports = router;
