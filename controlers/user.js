const User = require("../modals/user");

exports.starterlink = (req,res) => {
    return res.json({
        status : "200 OK"
    })
}

exports.createUser = (req,res) => {
    const user = new User(req.body)
    console.log(req.body)
    user.save((err,user) => {
        if(err|| !user) {
            return res.status(400).json({
                    error : 'Not able to save in DB',
                    param : err
            })
        }
        return res.json({
            user
        })
    })
}

exports.updateUser = (req,res) => {
    const id = req.params.collageId
    console.log(id,"ID")
    const userData = req.body
    console.log(userData,"userData")
    User.find({collageId : id })
    .exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                err : 'No user found!!',
                error : err
            })
        }
        console.log(user, "User")
        user[0].name = userData.name
        user[0].email = userData.email
        user[0].collageId = userData.collageId
        user[0].collageEmail = userData.collageEmail
        user[0].save((err,user) => {
            if(err|| !user) {
                return res.status(400).json({
                        error : 'Not able to save in DB',
                        param : err
                })
            }
            return res.json({
                user
            })
        })
    })
    
}