const mongoose = require('mongoose');

const poSchema = new mongoose.Schema({
    poNumber: {
        type: String,
        required: true,
        unique: true
    },
    vendor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Vendor',
        required: true
    },
    orderDate: {
        type: Date,
        required: true
    },
    deliveryDate: {
        type: Date,
        required: true
    },
    items: {
        type: Object,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'canceled'],
        default: 'pending'
    },
    qualityRating: {
        type: Number,
        default: null
    },
    issueDate: {
        type: Date,
        required: true
    },
    acknowledgmentDate: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model('PurchaseOrder', poSchema);
