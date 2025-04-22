const express = require('express');
const { studentOnboarding, studentsOnboardingList, studentDetaislById } = require('../controllers/studentController');
const router = express.Router();


router.post('/create', studentOnboarding);

router.get('/list',  studentsOnboardingList);

router.get('/details/:id', studentDetaislById)

module.exports = router;