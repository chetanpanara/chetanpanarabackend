const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
  title: String,
  link:String,
  description:String
})

const videoModel = mongoose.model('Youtubevideos', videoSchema)

module.exports = videoModel