const express = require('express');
const { studentOnboarding, studentsOnboardingList, studentDetaislById, updateStudentStatus } = require('../controllers/studentController');
const router = express.Router();


router.post('/create', studentOnboarding);

router.get('/list',  studentsOnboardingList);

router.get('/details/:id', studentDetaislById)

router.patch('/:id/status', updateStudentStatus)

module.exports = router;