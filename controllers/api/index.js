const router = require('express').Router();
const breweriesRoutes = require('./breweries-routes');

router.use('/breweries', breweriesRoutes);

module.exports = router;