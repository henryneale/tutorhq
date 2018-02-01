const express = require('express');
const router = express.Router();
const helpers = require('../database/helpers');

router.get('/dashboard', helpers.getSubjects);
router.post('/dashboard', helpers.newSubject);

router.get('/dashboard/:tutor', helpers.getTutor);
router.post('/dashboard/:tutor', helpers.newTutor);
router.put('/dashboard/:tutor', helpers.updateTutor);

router.get('/tutors', helpers.getTutors);

module.exports = router;
