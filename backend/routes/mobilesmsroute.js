const express = require('express')
const mobilesmsroute = express.Router()
const mobilesmsController = require('../controllers/mobilesms')
const auth = require('../middleware/auth')

mobilesmsroute.get('/recieve', auth.authorizeUserAndAdmin, mobilesmsController.getMobilesms)
mobilesmsroute.post('/sent', auth.authorizeUserAndAdmin, mobilesmsController.postMobilesms)
mobilesmsroute.delete('/delete', auth.authorizeUserAndAdmin, mobilesmsController.deleteMobilesms)

module.exports = mobilesmsroute