module.exports = (express) => {
  const router = express.Router();

  router.get('/users', (req, res) => {
    res.json([
      {
        id: 1,
        name: 'sean edwards',
      },
      {
        id: 2,
        name: 'micheal jackson',
      },
      {
        id: 3,
        name: 'steve coral',
      }
    ]);
    });

  router.get('/users/:id', (req, res) => {
    res.json({
      id: 1,
      name: "sean edwards",
    });
  });

  return router;
}
