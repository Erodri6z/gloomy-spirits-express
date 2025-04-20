import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'\
import * as drinksCtrl from '../controllers/drinks.js'

const router = Router()

/*---------- Public Routes ----------*/
// View Drinks
router.get('/', drinksCtrl.index)
router.get("/:id", drinksCtrl.show)

// View Specific Drinks

// Search By name 

// Search by alc

// Search by vibe 

/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// Create Drink

// Edit Drink 

// Delete Drink


export { router }
