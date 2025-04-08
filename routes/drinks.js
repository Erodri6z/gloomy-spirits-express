import { Router } from 'express'
import { decodeUserFromToken, checkAuth } from '../middleware/auth.js'\
import * as drinksCtrl from '../controllers/drinks.js'

const router = Router()

/*---------- Public Routes ----------*/


/*---------- Protected Routes ----------*/
// router.use(decodeUserFromToken)


export { router }
