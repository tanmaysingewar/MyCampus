const mongoose = require('mongoose')
const {Schema} = mongoose

const userSchema = new Schema({
    name : {
        type: String,
        trim: true,
        required: true,
        maxlength:50
    },
    email : {
        type: String,
        trim: true,
        required: true,
        maxlength:50
    },
    collageId : {
        type: String,
        trim: true,
        required: true,
        maxlength:50,
        unique: true
    },
    collageEmail : {
        type: String,
        trim: true,
        required: true,
        maxlength:50
    }
})

module.exports = mongoose.model('User',userSchema)
