import { Router } from 'express'
// import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'
import * as drinksCtrl from '../controllers/drinks.js'

const router = Router()

/*---------- Public Routes ----------*/
// View Drinks
router.get('/', drinksCtrl.index)


// Search By name 
router.get("/search", drinksCtrl.findByName)
// Search by alc
router.get("/byAlcohol/:mainSpirit", drinksCtrl.findByAlc)
// Search by vibe 
router.get("/byVibe/:vibe", drinksCtrl.findByVibe)
// View Specific Drinks
router.get("/:id", drinksCtrl.show)
/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)
// Create Drink
router.post("/", drinksCtrl.create)

// Edit Drink 
router.put("/:id", drinksCtrl.edit)

// Delete Drink
router.delete('/:id', drinksCtrl.delete)


export { router }
