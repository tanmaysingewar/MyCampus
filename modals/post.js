const mongoose = require('mongoose')
const {Schema} = mongoose

const postSchema = new Schema({
    postDec: {
        type: String,
        trim: true,
        required: true,
        maxlength:1000
    },
    postTitle: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    reflink: {
        type: String,
        maxlength: 1000
    },
    contact: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    googleFormLink: {
        type: String,
        trim: true,
        maxlength: 1000
    },
    videoId :{
        type: String,
        trim: true,
        maxlength: 1000
    },
    campus : {
        type : Boolean,
        default : false
    }
})

module.exports = mongoose.model('Post',postSchema)