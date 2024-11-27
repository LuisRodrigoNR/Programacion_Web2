const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const path = require("path");
const pageRutes = require("./rutas/pages");

/*instanciar*/ 
const app = express();
app.use(bodyParser.urlencoded({extended: false}));
//analizar los datos del cuerpo de las solicitudes HTTP, especificamente los datos que provienen de formulario HTML enviados atraves de propiedad POST y GET

//motor de plantillas para html de forma dinamica
app.set('view engine', 'ejs');

//usamos las rutas de pages.js

app.use('/',pageRutes);

//ruta para estilos
app.use(express.static(path.join(__dirname, 'public')));


//creedenciales para DB
const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '1234',
    database: 'node_crud',
    port: '3306'
});

//conexion a la DB
db.connect(err=>{
    if(err){
        console.log(`Error al momento de hacer conexion BB :3 ${err}`);
    }else{
        console.log(`Conexion realizada :3`);
    }
});
/*Puerto*/
const port = 5005; 
const hostName= '192.168.1.72';
//server inicio
app.listen(port,hostName,()=>{
    console.log(`El server esta en escucha desde http://${hostName}:${port}`);
});

//Mostrar lista de usuarios
app.get('/',(req,res)=>{
    //Consulta  a la base de datos
    const query = 'SELECT * FROM users';
    // trabajar con la conexion
    db.query(query,(err,results)=>{
        if(err){
            //mensaje de error para el usuario
            console.error(`Error al recuperar datos -> Codigo de error:${err}`);
            res.send('Error en recuperar datos');
        }else{
            res.render('index',{users: results});
        }

    });    

});


//agregar usuario
app.post('/add',(req,res)=>{
    const {name,email} = req.body;
    const query = 'INSERT INTO users (name, email)VALUE (?,?)';
    db.query(query,[name,email],(err)=>{
        if(err){
            console.error(`Error al insertar usuarios: Codigo-> ${err}`);
            res.send('Error');
        }else{
             res.redirect('add');   
        }
    });
});

//editar usuario

app.get('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query,[id],(err,results)=>{
        if(err){
            console.error('Error en la DB');
            res.send("Error en la DB ");
        }else{
            res.render('edit',{user:results[0]});

        }
    }); 
});

//actualizamos datos
app.post('/edit/:id',(req,res)=>{
    const {id} = req.params;
    const {name,email} = req.body;
    const query = 'UPDATE users SET name = ?, email = ? WHERE id = ?';
    db.query(query,[name,email,id], (err,results)=>{
        if(err){
            console.error('Error en la DB');
            res.send("Error en la DB ");
        }else{
            res.redirect('/'); //redirigimos a la pagina principal

        }
    })
})

//eliminar

app.get('/delete/:id',(req,res)=>{
    const {id}=req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query,[id],(err)=>{
        if(err){
            console.error('Error en el Delete');
            res.send("error al eliminar");
        }else{
            res.redirect('/');
        }
    });
});