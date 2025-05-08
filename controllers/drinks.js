import { Drink } from '../models/drink.js'
import { v2 as cloudinary } from 'cloudinary'


// todo: link cloudinary 
// todo: link mongodb X

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

// By Id
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
async function findByName(req, res) {
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
// TODO: Once we figure out the approach for the profiles, Make it so only admin accounts can "

async function create(req, res) {
  try {
    const newDrink = await Drink.create(req.body)
    console.log(newDrink)
    res.json(newDrink)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Edit Drink
async function edit(req, res) {
  try{
    const drink = await Drink.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new : true
      }
    )
    res.json(drink)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}

// Delete Drink
async function deleteDrink(req, res) {
  try{
    const drink = await Drink.findByIdAndDelete(req.params.id)
    res.json(drink)
  } catch {
    console.log(err)
    res.status(500).json(err)
  }
}




export { 
  index,
  show,
  findByName,
  findByVibe,
  findByAlc,
  create,
  edit,
  deleteDrink as delete
}
