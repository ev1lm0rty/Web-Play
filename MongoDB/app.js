const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const model = require('./models/test.js')
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/morty' , {useNewUrlParser: true , useUnifiedTopology: true})

// post data
app.post('/create' , async (req , res) => {
  const record = req.body
  console.log(record)
  const r = await model.create(record)// accepts json
  res.json({status:'ok'})
  console.log(r)
})

app.listen(5000 , () => {
  console.log("Server Up")
});
