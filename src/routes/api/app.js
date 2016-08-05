// Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {
// Sets constant of router to express.Router() function
  const router = express.Router();

// respond with apps json when a GET request is made to the apps route
  router.get('/apps', (req, res) => {
    // respond with this json data
    res.json([
      {
        id: 1,
        title: 'pokemon go',
        description: 'catch em all',
        releaseDate: '6/15/16',
      },
      {
        id: 2,
        title: 'Slack',
        description: 'commnication',
        releaseDate: '6/18/2015',
      },
      {
        id: 3,
        title: 'snapchat',
        description: 'social media',
        releaseDate: '9/07/16',
      },
//closes res.json "response . json "
    ]);
// closes app id router
  });

// respond with app by id when a GET request is made to the apps by id route
  router.get('/apps/:id', (req, res) => {
// respond with this json data
    res.json(
      {
        id: 1,
        title: 'pokemon go',
        description: 'catch em all',
        releaseDate: '6/15/16',
// closes res.json "response . json "
      });
// closes app id router
  });
// returns router with correct data
  return router;
};
