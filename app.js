const express = require("express");

const errorHandler = require("./middlewares/errorHandler");

// all route section begins
const ProductRoutes = require("./route/productRoutes");
const AuthRoutes = require("./route/authRoute");

const app = express();
const morgan = require("morgan");

app.use(express.json());
app.use(morgan("tiny"));



// routes middlewares
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/product", ProductRoutes);

app.use(errorHandler);
module.exports = app;
