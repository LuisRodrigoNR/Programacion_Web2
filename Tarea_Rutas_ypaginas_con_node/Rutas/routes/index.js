const express = require("express");
const router = express.Router();

//definicion de las rutas y los manejadores

router.get("/",(req,res)=>{
    res.send("Hola Rodrigo desde mi ruta de inicio, pagina principal")
});

router.get("/registro",(req,res)=>{
    res.send("Hola Rodrigo desde el registro")
});

module.exports = router;