const mongoose = require("mongoose");
const env = require("dotenv");

env.config();
console.log("modulo database")

const uri = process.env.URLDATABASE;

mongoose
  .connect(uri)
  .then((db) => console.log(`Conexion db exitosa`))
  .catch((err) => console.log(err));

  module.exports=mongoose