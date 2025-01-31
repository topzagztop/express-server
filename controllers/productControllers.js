exports.listProducts = (req, res) => {
  // code
  throw new Error("Easy handle Error")
  res.json({ message: "Hello Controller List Product" });
};

exports.readProduct = (req, res) => {
  const { id } = req.body;
  res.json({
    productId: id,
    message: "Hello, GET Product ID",
  });
};

exports.createProduct = (req, res) => {
  res.json({ message: "Hello, POST Product" });
};

exports.updateProduct = (req, res) => {
  const { id } = req.body;
  res.json({ message: "Hello PUT Product" });
};

exports.deleteProduct = (req, res) => {
  res.json({ message: "Hello, DELETE product" });
};
