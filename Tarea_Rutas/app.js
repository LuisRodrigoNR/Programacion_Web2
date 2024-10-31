const express = require("express"); // Importamos el módulo Express para usar sus funcionalidades
const pageRoutes = require("./rutas/pages.js"); // Importamos las rutas definidas en el archivo 'pages.js'

const app = express(); // Creamos una instancia de Express, que representa la aplicación
const PORT = 5005; // Definimos el puerto en el que el servidor escuchará

app.use(express.static('paginas')); // Configura Express para servir archivos estáticos desde la carpeta 'public'

// Usamos las rutas definidas en 'pageRoutes' (que es el archivo 'pages.js') para las rutas base
app.use('/', pageRoutes);

// Redirigimos cualquier solicitud a la raíz ('/') hacia '/index' (la página de bienvenida)
app.get('/', (req, res) => {
    res.redirect('/index.html');
});

// Iniciamos el servidor en el puerto especificado y muestra un mensaje en la consola
app.listen(PORT, () => {
    console.log(`Estoy escuchando desde el http://localhost:${PORT}`);
});
