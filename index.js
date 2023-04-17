require("dotenv").config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require('express')
const app = express()
const port = 3000
// var userroutes = require('./routes/user')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=>{
  console.log("DB Connected")
})

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// app.use('/api', userroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})