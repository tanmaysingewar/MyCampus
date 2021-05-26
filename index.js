const express = require("express")
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const userRoutes = require("./routes/user")
const postRoutes = require("./routes/post")

mongoose.connect( "mongodb://utlizut5tmwgjjffbkp2:6te9nrXxIctmQH42D9cz@bs1m6qxtojiqs2h-mongodb.services.clever-cloud.com:27017/bs1m6qxtojiqs2h",{
    useCreateIndex :true,
    useUnifiedTopology: true,
    useNewUrlParser: true

}).then(()=>{
    console.log('DB IS CONNECTED')
}).catch((e) => {
    console.log(e)
    console.log("DB Connection fail")
})

app.use(bodyParser.json())
app.use(cookieParser())
app.use(cors())

app.use('/api',userRoutes)
app.use('/api',postRoutes)

const port = process.env.PORT || 8080
app.listen(port, ()=>{
    console.log('SERVER IS RUNNING AT',port)
})
