const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    name: { type: String, required: true,},
    price: { type: Number, required: true,},
    amount: { type: Number, required: true,},
    description: {
      type: String,
      required: false,
      default: "El usuario no añadió una descripción",
    }
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("product", productSchema);
