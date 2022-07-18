const express = require("express");


// all route section begins
const ProductRoutes = require("./route/productRoutes");
const AuthRoutes = require("./route/authRoute");

const errorHandler = require("./middlewares/error");
// express
const app = express();
app.use(express.json());


// other packages
const morgan = require("morgan");
const cookiePaser = require("cookie-parser");


app.use(morgan("tiny"));
app.use(cookiePaser(process.env.JWT_SECRET))



// routes middlewares
app.get('/',(req, res)=>{
    console.log(req.cookies)
})
app.use("/api/v1/auth", AuthRoutes);
app.use("/api/v1/product", ProductRoutes);

app.use(errorHandler);
module.exports = app;
