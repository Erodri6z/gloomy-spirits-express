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
  console.log("aint no way this is whats being hit")
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
async function findByName(req, res) {
  console.log("this is getting hit")
  try {
    const q = req.query.name || ""
    console.log("Looking for ", q)
    const drinks = await Drink.find({ Name: { $regex: q, $options: "i" } })
    console.log("Results:", drinks)
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

async function create(req, res) {
  try {
    const 
  } catch {

  }
}

// Edit Drink

// Delete Drink




export { 
  index,
  show,
  findByName,
  findByVibe,
  findByAlc
}
