import  express  from 'express'
import singupController from '../controllers/auth/singupController.js'
import loginController from '../controllers/auth/loginController.js'
import logoutController from '../controllers/auth/logoutController.js'

const router = express.Router()

router.post('/singup', singupController)

router.post('/login', loginController )

router.post('/logout', logoutController)        

export default router