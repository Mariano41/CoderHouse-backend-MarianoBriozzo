//SERVIDOR EXPRESS

import express from 'express'

// import ProductManager from "./ProductManager.js"

const app = express()

const users = [{
  idUser: 1,
  name: "Marcelo",
  country: "Argentina"
},
{
  idUser: 2,
  name: "Melody",
  country: "Argentina"
},
{
  idUser: 3,
  name: "Antonio",
  country: "Polonia"
}
]

app.use(express.urlencoded({ extended: true }))

app.get("/bienvenida", (req, res) => {
  res.send('<h1 style="color: blue; " >¡Welcome to the curse!</h1>')
})

app.get("/users/", (req, res) => {
  console.log(req.query.name)
  console.log(req.query.country)
  const { idUser } = req.params
  res.send(users)
})

app.get("/users/:idUser", (req, res) => {
  console.log(req.query.name)
  console.log(req.query.country)
  const { idUser } = req.params
  res.send(users[idUser])
})

app.get("/products/", (req, res) => {
  const { limit } = req.params
  res.send(productos)
})

app.get("/products/:idUser", (req, res) => {
  const { limit } = req.params
  console.log(req.query.name)
  console.log(req.query.country)
  const { idUser } = req.params
  res.send(users[idUser])
})

app.get("/categories", (req, res) => {
  res.send(users)
})

app.get("/admins", (req, res) => {
  res.send(users)
})


app.listen(8080, () => {
  console.log("Running from express")
})

















































