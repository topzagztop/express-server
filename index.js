const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
require("dotenv").config();
// Import Product
const productsRoute = require("./routes/products")

const handleError = require("./middlewares/error")

const app = express();

// Middleware
app.use(cors()); // allow cross domain
app.use(express.json()); // read json
app.use(morgan("dev")); // Show log command

// Routing
app.use("/api", productsRoute);

//handleError
app.use(handleError)



// Start Server
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servier is running on port ${PORT}`));
