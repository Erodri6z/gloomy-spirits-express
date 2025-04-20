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

// Search by alc

// Create Drink

// Edit Drink

// Delete Drink




export { 
  index,
  show
}
