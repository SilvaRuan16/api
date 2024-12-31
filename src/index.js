const express = require("express");
const mongoose = require("mongoose");
const Models = require("./models");
const path = require("path");
const fs = require("fs");

const app = express()
app.use(express.json())
const port = 3000

mongoose.connect("mongodb+srv://ruangustavosoares16:PJgl0qcKkNQgRyi4@starwars-api.8nczo.mongodb.net/?retryWrites=true&w=majority&appName=StarWars-api")

app.get("/", async (req, res) => {
  const films = await Models.Film.find()
  return res.send(films)
})

app.post("/", async (req, res) => {
  const film = new Models.Film(req.body)
  await film.save()
  return res.send(film)
})

app.put("/:id", async (req, res) => {
  const film = await Models.Film.findByIdAndUpdate(req.params.id, req.body, { new: true })
  return res.send(film)
})

app.delete("/:id", async (req, res) => {
  const film = await Models.Film.findByIdAndDelete(req.params.id)
  return res.send(film)
})

// app.get("/load-data", async (req, res) => {
//   try {
//     const filePath = path.join(__dirname, "../data/data.json")
//     console.log(filePath)
//     const rawData = fs.readFileSync(filePath)
//     console.log(rawData)
//     const data = JSON.parse(rawData)
//     console.log(data)

//     await Models.Film.insertMany(data)
//     res.send({ message: "Data loaded into database" })
//   } catch (error) {
//     console.log(error)
//     res.status(500).send({message: "Error loading data"})
//   }
// })

app.listen(port, () => {
  console.log("Server running on port ", port)
})