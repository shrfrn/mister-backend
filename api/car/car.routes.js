const express = require('express')
const router = express.Router()

const { requireAuth, requireAdmin } = require('../../middlewares/requireAuth.middleware')
const { log } = require('../../middlewares/logger.middleware')

const { getCars, getCarById, addCar, updateCar, removeCar, addCarMsg, removeCarMsg } = require('./car.controller')

// If we want a specific middleware (i.e. requireAuth) 
// to be activated on all end points of this router:
// router.use(requireAuth)

router.get('/', log, getCars)
router.get('/:id', getCarById)
router.post('/', requireAuth, addCar)
router.put('/:id', requireAuth, updateCar)
router.delete('/:id', requireAuth, removeCar)
// router.delete('/:id', requireAuth, requireAdmin, removeCar)

router.post('/:id/msg', requireAuth, addCarMsg)
router.delete('/:id/msg/:msgId', requireAuth, removeCarMsg)

module.exports = router