
const user = require('../../modules/user');

//Set module.exports to a function that excepts express as a paramater of express.
module.exports = (express) => {

// Sets constant of router to express.Router() function
  const router = express.Router();

// respond with users json when a GET request is made to the users route
  router.get('/users', (req, res) => {
//respond with this json data
    res.json(
      healty: true,
    );
    });


//create
//read
//update
//delete


// // respond with user by id when a GET request is made to the users by id route
//   router.get('/users/:id', (req, res) => {
// // respond with this json data
//     res.json({
//       id: 1,
//       name: "sean edwards",
//     });
//   });

// returns router with correct data
  return router;
}
