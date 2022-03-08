const Product = require("../models/productsModel");

const getProducts = async (req, res) => {
  const products = await Product.find();

  res.json(products);
};
const getOneProduct = async (req, res) => {
  const { name_product } = req.params;
  const product = await Product.find({ name: name_product });

  res.status(201).json({ product });
};
const createProduct = async (req, res) => {
  try {
    const { name, price, amount, description } = req.body;
    const product = new Product({
      name,
      price,
      amount,
      description,
    });

    await product.save();
    res
      .status(201)
      .json({ status: `El producto ${name}, fue creado con exito`,created:true});
   
  } catch (err) {
    console.log(err);

    res.status(203).json({ status: `Se Produjo un error, ${err}`,created:false });
  }
};

module.exports = {
  getProducts,
  getOneProduct,
  createProduct,
};
