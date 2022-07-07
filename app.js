const express = require("express")
const ProductRoutes = require('./route/productRoutes')
const AuthRoutes = require('./route/authRoute')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))








app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/product", ProductRoutes);

app.use(errorHandler)
module.exports = app;
