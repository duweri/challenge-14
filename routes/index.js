// Import modules and routes
const homeRoutes = require("./home-routes");
const router = require("express").Router();
const apiRoutes = require("./api");

// Set up routes
router.use("/api", apiRoutes);
router.use("/", homeRoutes);
// Export the router
module.exports = router;