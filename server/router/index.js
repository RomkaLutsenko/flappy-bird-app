const Router = require('express')
const userController = require('../controllers/user-controller')
const { body } = require('express-validator')
const authMiddleware = require('../middlewares/auth-middleware')

const router = new Router()

router.post(
	'/registration',
	// body('name').isString,
	// body('password').isLength({ min: 3, max: 32 }),
	userController.registration
)
router.post('/login', userController.login)
router.post('/logout', userController.logout)
router.get('/refresh', userController.refresh)
router.get('/users', authMiddleware, userController.getUsers)
router.post('/money', userController.setUserMoney)
router.post('/data', userController.setUserData)
router.post('/flag', userController.setBonusFlag)

module.exports = router
