const { createSkills } = require('../controllers/skillsController');
const router = require('express').Router();

router.post('/create-skills', createSkills );

module.exports = router;

