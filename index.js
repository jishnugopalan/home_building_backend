require("dotenv").config()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const express = require('express')
const app = express()
const port = 3000
var authroutes = require('./routes/authroutes')
var workroutes=require('./routes/workroutes')
var coonectionroutes=require('./routes/connection')
var quotationroutes=require('./routes/quotation')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.DATABASE,{
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}).then(()=>{
  console.log("DB Connected")
})

app.use(bodyParser.json({limit:'10mb'}))
app.use(cookieParser());
app.use(cors());

app.use('/api', authroutes)
app.use('/api',workroutes)
app.use('/api',coonectionroutes)
app.use('/api',quotationroutes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})