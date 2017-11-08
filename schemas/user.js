const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  name: String,
  pronouns: Array
})

module.exports = userSchema
