import { Drink } from '../models/drink'
import { v2 as cloudinary } from 'cloudinary'


// todo: link cloudinary 
// todo: link mongodb 
// By Id

// View Drinks

async function index(req, res) {
  try {
    Drink.find({})
    .then(drinks => 
      res.json(drinks)
    )
  } catch {
    console.log(err)
    res.redirect('/')
    res.status(500)
  }
}

// Search Drink by Name 

// Search by Vibe 

// Search by alc

// Create Drink

// Edit Drink

// Delete Drink




export { index }
