import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'\
import * as drinksCtrl from '../controllers/drinks.js'

const router = Router()

/*---------- Public Routes ----------*/
// View Drinks
router.get('/', drinksCtrl.index)

// View Specific Drinks
router.get("/:id", drinksCtrl.show)

// Search By name 
router.get("/search", drinksCtrl.search)
// Search by alc
router.get("/byAlcohol/:mainSpirit", drinksCtrl.findByAlc)
// Search by vibe 
router.get("/byVibe/:vibe", drinksCtrl.findByVibe)
/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// Create Drink

// Edit Drink 

// Delete Drink


export { router }
