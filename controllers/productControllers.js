const createError = require("../utils/createError");

exports.listProducts = (req, res, next) => {
  try {
    // code
    if (true) {
      return createError("400", "Password is Wrong!!!");
    }
    res.json({ message: "Hello Controller List Product" });
  } catch (error) {
    next(error);
  }
};

exports.readProduct = (req, res, next) => {
  try {
    const { id } = req.body;
    res.json({
      productId: id,
      message: "Hello, GET Product ID",
    });
  } catch (error) {
    next(error);
  }
};

exports.createProduct = (req, res, next) => {
  try {
    res.json({ message: "Hello, POST Product" });
  } catch (error) {
    next()
  }
};

exports.updateProduct = (req, res, next) => {
  try {
    const { id } = req.body;
    res.json({ message: "Hello PUT Product" });
  } catch (error) {
    next();
  }
};

exports.deleteProduct = (req, res, next) => {
  try {
    res.json({ message: "Hello, DELETE product" });
  } catch (error) {
    next();
  }
};
