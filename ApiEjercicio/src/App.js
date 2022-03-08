/* Importar modulo express
    Importar modulo env.dotenv
    crear app.express */

const express = require("express");
const morgan = require("morgan");
const env = require("dotenv");
require('./database')
const app = express();
const cors=require('cors')


//configurar variables de entorno y asignar a una variable


env.config();
const port = process.env.PORT;

//Usar Rutas de Appi desde carpeta routes


app.use(morgan("dev"));
app.use(express.json())
app.use(cors({origin:['http://localhost:4200']}))
app.use("/api/products", require("./routes/productRoutes"));

//Escuchar puerto de app o express

app.listen(port, () => {
  console.log(`Ejecutando desde Port ${port}`);
});
