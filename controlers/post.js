const Post = require("../modals/post")

exports.createPost = (req,res) => {
    const post = new Post(req.body)
    console.log(req.body)
    post.save((err,post) => {
        if(err|| !post) {
            return res.status(400).json({
                    error : 'Not able to save in DB',
                    param : err
            })
        }
        console.log("post added")
        return res.json({
            post
        })
    })
}

exports.getPost = (req,res) => {
    const skip = parseInt(req.params.start) 
    console.log(skip,"Skip")
    Post.find()
    .skip(skip)
    .limit(10)
    .sort({ _id : 'desc' })
    .exec((err, post) => {
        if(err) {
            return res.status(400).json({
                    error : 'Not able to get from Db',
                    param : err
            })
        }
        if(!post){
            return res.status(200).json({
                post : "no more post",
                end : true
            })
        }
        return res.json(post)
    })
}

exports.deletePost = (req,res) =>{
    const _id = req.params.id
    Post.findById(_id)
    .exec((err, post) => {
        if(err|| !post) {
            return res.status(400).json({
                    error : 'Not able DELETE',
                    param : err
            })
        }
        post.remove((err, post) => {
            if (err || !post) {
                return res.json({
                    error : 'Not able to delete Post'
                })
            }
            res.json({
                msg: 'Post has been removed',
                status : true,
                action : "deleted"
            })
        })
    })
}