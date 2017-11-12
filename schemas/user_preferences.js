const mongoose = require('mongoose')

const Schema = mongoose.Schema

const userPreferencesSchema = new Schema({
  userColor: Array,
  userBrightness: Number,
  userContrast: Number,
  userDrinkTemp: Number
})

module.exports = userPreferencesSchema
