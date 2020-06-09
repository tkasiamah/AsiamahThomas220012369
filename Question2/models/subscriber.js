const mongoose = require('mongoose')

const subscriberSchema = new mongoose.Schema({
  materialcode: {
    type: String,
    required: true
  },
  materialname: {
    type: String,
    required: true
  },
  materialprice: {
    type: Float,
    required: true
  },
  materialstock: {
    type: Float,
    required: true,

  }
})

module.exports = mongoose.model('Subscriber', subscriberSchema)