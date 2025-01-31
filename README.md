# Server

## Step 1 Install package
```bash
npm init -y
```

## Step 2 Install lib
```bash
npm install express cors nodemon morgan dotenv
```

## Step 3 Create index.js

## Step 4 Edit package.js

```JSON 
{
    "scripts": {
    "start" : "nodemon index.js"
  },
}
```

## Step 5 Setup Server index.js
```bash
const express = require("express");
const cors = require("cors")
const morgan = require("morgan")

const app = express();

//middleware
app.use(cors()) // allow cross domain
app.use(express.json()) // read json
app.use(morgan("dev")) // Show log command


// Start Server
const PORT = 8000;
app.listen(PORT, () => console.log(`Servier is running on port ${PORT}`));

```
## Step 6 Routing
create folder routes/products.js
```bash
const express = require("express");
const router = express.Router();

router.get("/products", (req, res, next) => {
    //body code
  console.log("Hello, GET Product");
  res.json({ message: "Hello, Product GET" });
});

module.exports = router;

```
# express-server
# express-server
