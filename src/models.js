const mongoose = require("mongoose")

const FilmScheme = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  image_url: String,
  trailer_url: String
})

const Film = mongoose.model("Film", FilmScheme)

module.exports = { Film };