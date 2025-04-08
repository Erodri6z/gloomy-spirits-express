const mongoose = require('mongoose')

const drinkSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  mainSpirit: {
    type: String,
    required: true,
    trim: true
  },
  image: {
    type: String,
    default: null
  },
  ingredients: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  measurementsOz: {
    type: [Number],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  bitters: {
    type: [String],
    default: undefined
  },
  garnish: {
    type: [String],
    default: undefined
  },
  color: {
    type: String,
    required: true,
    trim: true
  },
  recommendedGlasses: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  notes: {
    type: [String],
    required: true,
    default: []
  },
  method: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  credit: {
    type: String,
    default: null
  },
  vibe: {
    type: String,
    required: true,
    trim: true
  }
}, {
  timestamps: true
})

const Drink = mongoose.model('Drink', drinkSchema)

export {
  Drink
}