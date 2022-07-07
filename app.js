const express = require("express")
const ProductRoutes = require('./route/productRoutes')
const errorHandler = require('./middlewares/errorHandler')

const app = express()
const morgan = require('morgan')

app.use(express.json())
app.use(morgan('tiny'))








app.use("/", ProductRoutes);

app.use(errorHandler)
module.exports = app;
