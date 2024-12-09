const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(process.env.Connection)
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error(err));

const YoutubevideosModel = require('./Model/Youtubevideos');

app.get('/data', (req, res) => { 
  YoutubevideosModel.find({})
  .then(result=>res.json(result))
  .catch(err=>res.json(err))
})


app.listen(8055, () => { 
  console.log("server is runing in 8055");
})