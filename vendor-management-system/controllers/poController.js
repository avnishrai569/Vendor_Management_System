const PurchaseOrder = require('../models/PurchaseOrder');
const Vendor = require('../models/Vendor');

exports.createPO = async (req, res) => {
    try {
        const po = new PurchaseOrder(req.body);
        await po.save();
        res.status(201).json(po);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPOs = async (req, res) => {
    try {
        const filter = req.query.vendor ? { vendor: req.query.vendor } : {};
        const pos = await PurchaseOrder.find(filter).populate('vendor');
        res.status(200).json(pos);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getPOById = async (req, res) => {
    try {
        const po = await PurchaseOrder.findById(req.params.poId).populate('vendor');
        if (!po) return res.status(404).json({ message: 'Purchase order not found' });
        res.status(200).json(po);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updatePO = async (req, res) => {
    try {
        const po = await PurchaseOrder.findByIdAndUpdate(req.params.poId, req.body, { new: true });
        if (!po) return res.status(404).json({ message: 'Purchase order not found' });
        res.status(200).json(po);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePO = async (req, res) => {
    try {
        const po = await PurchaseOrder.findByIdAndDelete(req.params.poId);
        if (!po) return res.status(404).json({ message: 'Purchase order not found' });
        res.status(200).json({ message: 'Purchase order deleted' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.acknowledgePO = async (req, res) => {
    try {
        const po = await PurchaseOrder.findById(req.params.poId);
        if (!po) return res.status(404).json({ message: 'Purchase order not found' });

        po.acknowledgmentDate = Date.now();
        await po.save();

        // Recalculate vendor's average response time
        const vendor = await Vendor.findById(po.vendor);
        const pos = await PurchaseOrder.find({ vendor: vendor._id, acknowledgmentDate: { $ne: null } });
        vendor.averageResponseTime = pos.reduce((acc, p) => acc + (p.acknowledgmentDate - p.issueDate) / pos.length, 0);
        await vendor.save();

        res.status(200).json(po);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
