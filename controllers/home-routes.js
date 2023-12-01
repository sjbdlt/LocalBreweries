const router = require('express').Router();
const { Breweries, User } = require('../models');
router.get('/', async (req, res) => {
    try {
        const postData = await Breweries.findAll({
            include: [User]
        })

        const brewery = postData.map(brewery => brewery.get({ plain: true })) // session of object is global to backend
       
        const breweryData = await fetch('https://api.openbrewerydb.org/breweries?per_page=3');
        const apiData = await breweryData.json();
    
        console.log(apiData)
        
        // res.json(apiData)
        res.render('homepage', {
            apiData,
            logged_in: req.session.logged_in
        })
    } catch (err) {
        console.log(err.message)
        res.status(500).json(err.message)
    }
})

module.exports = router;