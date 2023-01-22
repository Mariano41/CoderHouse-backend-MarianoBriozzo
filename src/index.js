//SERVIDOR EXPRESS

import express from 'express'

import ProductManager from './ProductManager.js'

const Productos = new ProductManager()

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

app.use('/users', router)

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

app.get("/products", (req, res) => {
  const { limit } = req.params
  res.send(Productos)
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

app.post('/', (req, res) =>{
  const {name, country } = req.body
  users.push({name, country})
  res.status(201).json({status: 201, message: 'Usuario Creado'})
  // res.status(500).json({status: 500, error: 'internal error'})
  res.send('Hi server with post')
})

app.put('/users/:id', (req, res) =>{
  const {id} = req.params
  const {name, country} = req.body
  const infoUser = {
    name, country
  }

if (!name) res.status(400).json('error: no se encuentra el name')
if (!country) res.status(400).json('error: no se encuentra el country')

  const myId = Number (id)
  const userPos = users.findIndex(user => user.id === myId)
  users[userPos] = {
    userId,
    ...infoUser
  }
  res.json({message: 'usuario actualizado'})
})

app.delete('/users/:id', (req, res) =>{
})

app.listen(8080, () => {
  console.log("Running from express")
})













































