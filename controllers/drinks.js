import { Drink } from '../models/drink'
import { v2 as cloudinary } from 'cloudinary'


// todo: link cloudinary 
// todo: link mongodb 
// By Id

// View Drinks

async function index(req, res) {
  try {
    const drinks = await Drink.find({})
    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

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

// Search by Vibe 
async function findByVibe(req, res) {
  try{
    const drinks = await Drink.find({ vibe : req.params.vibe })
    res.json(drinks)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}
// Search by alc
async function findByAlc(req, res) {
  try {
    const drinks = await Drink.find({ mainSpirit: req.params.mainSpirit })
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
  findByVibe,
  findByAlc
}
