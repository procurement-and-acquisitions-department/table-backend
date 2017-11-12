const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  ID: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  pronouns: {
    active: String,
    passive: String,
    possessive: String
  },
  Avatar: String,
  RFIDTag: String,
  password: String,
  preferencesId: String,
  characters: Array
})

module.exports = userSchema
