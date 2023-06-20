const {createUserDetails, updateUserDetails, getUserDetails} = require('../controllers/detailsController');
const router = require('express').Router();

router.get('/user-details', getUserDetails);
router.post('/create-details', createUserDetails);
router.put('/update-details', updateUserDetails)

module.exports = router; 