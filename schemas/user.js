const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  name: String,
  pronouns: Array,
  Avatar: String,
  RFIDTag: String,
  password: String,
  preferencesId: String,
  characters: Array
})

module.exports = userSchema
