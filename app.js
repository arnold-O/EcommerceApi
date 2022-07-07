const express = require("express");


// all route section begins
const ProductRoutes = require("./route/productRoutes");
const AuthRoutes = require("./route/authRoute");

const errorHandler = require("./middlewares/error");
const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));



// routes middlewares
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/product", ProductRoutes);

app.use(errorHandler);
module.exports = app;
