

// array of all routes to test
const routes = [
  {
    description: 'Create an app',
    route: 'api/v1/apps',
    method: 'post',
  },
  {
    description: 'Read an app',
    route: 'api/v1/apps',
    method: 'get',
  },
  {
    description: 'Read an app by id',
    route: 'api/v1/apps/:id',
    method: 'get',
  },
  {
    description: 'update an app',
    route: 'api/v1/apps/:id',
    method: 'post',
  },
  {
    description: 'delete an app',
    route: 'api/v1/apps/:id',
    method: 'delete',
  },
];

// setup a group of test
describe('Route testing', () => {
  let server;

// before each instance
  beforeEach(() => {
    server = require('../src/server');
  });

  afterEach(() => {
    server.close();
  });


});
