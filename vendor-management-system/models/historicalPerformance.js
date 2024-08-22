const mongoose = require('mongoose');

const historicalPerformanceSchema = new mongoose.Schema({
  vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  date: { type: Date, required: true },
  onTimeDeliveryRate: { type: Number },
  qualityRatingAvg: { type: Number },
  averageResponseTime: { type: Number },
  fulfillmentRate: { type: Number },
});

module.exports = mongoose.model('HistoricalPerformance', historicalPerformanceSchema);
