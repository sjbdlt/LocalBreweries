const router = require('express').Router();
const { Breweries, User } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all breweries
router.post('/', async (req, res) => {
  try {
    const brewData = await Breweries.findAll({
      include: [
        {
          model: User
        },        
      ],     
      where: {
        user_id: req.body.user_id
      }
    });
    const breweries = brewData.map((brewery) =>
    brewery.get({ plain: true })
    );
    //res.json(breweries);  
    res.render('mypubs', {
      breweries,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});


// GET one breweries
router.get('/singlebrewery/:id', async (req, res) => {
  try {
    const brewData = await Breweries.findByPk(req.params.id, {
      include: [
        {
          model: User
        },
      ],
    });
    const breweries = brewData.get({ plain: true });
    //res.json(breweries); 
    res.render('mypubscomment', {
      breweries,
      logged_in: true
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Updates breweries comment on its id
router.put('/:id', (req, res) => {
    //Calls the update method on the Book model
    Breweries.update(
      {
        comments: req.body.comments        
      },
      {       
        where: {
          id: req.params.id,
        },
      }
    )
      .then((Breweries) => {
        //res.json(Breweries);
        res.render('mypubs', {
            Breweries,
            logged_in: true
          });
      })
      .catch((err) => {
        console.log(err);
        res.json(err);
      });
  });


  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const brewData = await Breweries.destroy({
        where: {
          id: req.params.id,
        },
      });
  
      if (!brewData) {
        res.status(404).json({ message: 'No brewery found with that id!' });
        return;
      }
  
      res.status(200).json(brewData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;