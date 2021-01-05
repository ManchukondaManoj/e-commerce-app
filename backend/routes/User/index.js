const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const authorization = require('../../middleware/authMiddleware');

const authUser = require('./authUser');
const getUser = require('./getUser');
const registerUser = require('./registerUser');
const updateUser = require('./updateUser');

router.post('/login', asyncHandler(authUser));
router.post('/register', asyncHandler(registerUser));

router.use(asyncHandler(authorization));
router.get('/profile', asyncHandler(getUser));
router.put('/profile', asyncHandler(updateUser));

module.exports = router;
