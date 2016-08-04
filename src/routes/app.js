module.exports = (express) => {
  const router = express.Router();

  router.get('/apps', (req, res) => {
    res.json([
      {
        id: 1,
        title: 'pokemon go',
        description: 'catch em all',
        releaseDate: '6/15/16'
      },
      {
        id: 2,
        title: 'Slack',
        description: 'commnication',
        releaseDate: '6/18/2015'
      },
      {
        id: 3,
        title: 'snapchat',
        description: 'social media',
        releaseDate: '9/07/16'
      },
    ]);
  });

  router.get('/apps/:id', (req, res) => {
    res.json(
      {
        id: 1,
        title: 'pokemon go',
        description: 'catch em all',
        releaseDate: '6/15/16'
      });
  });

  return router;
}
