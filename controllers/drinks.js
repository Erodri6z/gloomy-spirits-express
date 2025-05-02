import { Drink } from '../models/drink.js'
import { v2 as cloudinary } from 'cloudinary'


// todo: link cloudinary 
// todo: link mongodb 
// By Id

// View Drinks

async function index(req, res) {
  try {
    const drinks = await Drink.find({})
    console.log(drinks)
    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Show Specific drink
async function show(req, res) {
  try{
    const drink = await Drink.findById(req.params.id)
    res.json(drink)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Search Drink by Name 
// TODO: find a way to deal with typos 
async function search(req, res) {
  try {
    const q = req.query.name || ""
    const drinks = await Drink.find({ name: { $regex: q, $options: "i" } })

    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Search by Vibe 
async function findByVibe(req, res) {
  try{
    const drinks = await Drink.find({ Vibe : req.params.vibe })
    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}
// Search by alc
async function findByAlc(req, res) {
  try {
    const drinks = await Drink.find({ MainSpirit: req.params.mainSpirit })
    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Create Drink

// Edit Drink

// Delete Drink




export { 
  index,
  show,
  search,
  findByVibe,
  findByAlc
}
