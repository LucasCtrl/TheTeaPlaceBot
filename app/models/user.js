const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  experience: { type: Number, required: true },
  guildId: { type: String, required: true },
  level: { type: Number, required: true },
  messages: { type: Number, required: true },
  userId: { type: String, required: true },
})

const model = mongoose.model('users', UserSchema)

module.exports = model
