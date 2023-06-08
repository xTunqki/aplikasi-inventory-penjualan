const express = require("express");
const router = express.Router();

// Load each controller
const microPostsController = require("./microPosts.js");
const customersController = require("./customer.js");
const itemsController = require("./item.js");
const salesController = require("./sales.js");

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/customer', customersController);
router.use('/item', itemsController);
router.use('/sales', salesController);

module.exports = router;
