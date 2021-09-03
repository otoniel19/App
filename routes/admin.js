const express = require("express")  
const router = express.Router() 

router.get("/",(req,res) => {
  res.send("Página principal do painel adm")
})

router.get("/posts",(req,res) => {
  res.send("Posts")
})

router.get("/categorias",(req,res) => {
 res.send("categorias")
})

module.exports = router 