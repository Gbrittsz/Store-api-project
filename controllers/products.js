const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {};

const getAllProductsStatic = async (req, res, next) => {
  try {
    const products = await Product.find({ price: { $gt: 30 } })
      .sort("price")
      .select("name price");
    res.status(200).json({ data: products });
  } catch (error) {
    console.log(error)
    res.status(500).json({ msg: error});
  }
}

module.exports = {
  getAllProducts,
  getAllProductsStatic,
};
