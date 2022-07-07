
const express = require('express')
const router = express()


const { getAllProducts } = require("../controllers/productController")

router.route('/').get(getAllProducts)



module.exports = router