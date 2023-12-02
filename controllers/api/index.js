const router = require('express').Router();
const userRoutes=require('./user-routes')

router.use('/User',userRoutes)

module.exports = router;