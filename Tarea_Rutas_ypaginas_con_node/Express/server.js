const express = require("express");
const path = require("path");

const app = express();

app.get("/",(req,res)=>{
        
        res.sendFile( path.join( __dirname+"/index.html"));    
    });

const port=3056;

app.listen(port,()=>{
    console.log(`El server esta en escucha desde el http://localhost:${port}`);
})