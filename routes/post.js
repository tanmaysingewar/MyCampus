const express = require('express')
const { createPost, getPost, deletePost } = require('../controlers/post')
const router = express.Router()

router.post('/post/create',createPost)

router.get('/post/all/:start',getPost)

router.delete('/post/delete/:id',deletePost)

module.exports = router