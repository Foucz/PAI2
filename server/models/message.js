var mongoose = require('mongoose');

var Message = mongoose.model('Message',{
  text: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
});

module.exports = {Message};
