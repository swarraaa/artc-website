const express = require('express')
const router = express.Router()

const {
  createNewStudent,
  verifyOTP,
  getAllRegisteredStudents,
  updateTask,
  verifyEmailWorking,
} = require('../controllers/task')

router.route('/testing').post(verifyEmailWorking)
router.route('/getAllRegisteredStudents').get(getAllRegisteredStudents)
router.route('/updateTask/:id/:truthvalue').patch(updateTask)
router.route('/').post(createNewStudent).patch(verifyOTP)

module.exports = router
