import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Mixed = Schema.Types.Mixed;


const drinkSchema = new Schema({
  Name: {
    type: String,
    required: true,
    trim: true,
  },
  MainSpirit: {
    type: String,
    required: true,
    trim: true
  },
  Image: {
    type: String,
    default: null
  },
  Ingredients: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  MeasurementsOz: {
    type: [Mixed],
    required: true,
  },
  Bitters: {
    type: [String],
    default: undefined
  },
  Garnish: {
    type: [String],
    default: undefined
  },
  Color: {
    type: String,
    required: true,
    trim: true
  },
  RecommendedGlasses: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  Notes: {
    type: [String],
    required: true,
    default: []
  },
  Method: {
    type: [String],
    required: true,
    validate: v => Array.isArray(v) && v.length > 0
  },
  Credit: {
    type: String,
    default: null
  },
  Vibe: {
    type: String,
    required: true,
    trim: true
  }
},{
  collection: "Drinks"
})

const Drink = mongoose.model('Drinks', drinkSchema)

export {
  Drink
}