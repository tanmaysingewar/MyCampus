const express = require('express')
const { starterlink, createUser, updateUser } = require('../controlers/user')
const router = express.Router()

router.get('/start',starterlink)

router.post('/signup',createUser)

router.put('/user/update/:collageId',updateUser)

module.exports = router